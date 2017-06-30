import axios from 'axios';
import cookie from 'react-cookie';

const singleton = Symbol();
const singletonEnforcer = Symbol();
const ApiDomainURI = '/api';
let axiosInstance;
const inFallBackMode = false;
const resolver = data => Promise.resolve(data);
const fallback = {
  authenticate: resolver,
  api: {
    'get': resolver,
    'post': resolver,
    'put': resolver,
    'delete': resolver
  }
};

export default class $http {

  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error('Cannot construct singleton');
    }
    if (!inFallBackMode) {
      this.onSuccessfullAuthenticate = this.onSuccessfullAuthenticate.bind(this);
    } else {
      this.authenticate = fallback.authenticate;
      axiosInstance = fallback.api;
    }

    if (this.jwt) {
      this.onSuccessfullAuthenticate({data: this.jwt});
    }
  }

  get apiDomainURI() {
    return ApiDomainURI;
  }

  get api() {
    return axiosInstance || axios;
  }

  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new $http(singletonEnforcer);
    }
    return this[singleton];
  }

  get header() {
    return {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      }
    };
  }

  get jwt() {
    if (!this._jwt) {
      this._jwt = cookie.load('jwt');
    }
    return this._jwt;
  }

  set jwt(value) {
    this._jwt = value;
    cookie.save('jwt', value, {
      maxAge: value.expires_in
    });
  }

  get token() {
    return this._jwt && this._jwt.access_token;
  }

  logout() {
    return new Promise((resolve, reject)=> {
      try {
        cookie.remove('jwt');
        delete this._jwt;
        if (axiosInstance) {
          axiosInstance.interceptors.request.eject(this.__inter);
        }
        resolve();
      } catch (e) {
        reject();
      }
    });
  }

  onSuccessfullAuthenticate(response) {
    axiosInstance = axios.create({
      responseType: 'json',
      baseURL: this.apiDomainURI
    });

    this.__inter = axiosInstance.interceptors.request.use(
      config => Object.assign(config, this.header),
      error => Promise.reject(error)
    );
    this.jwt = response.data;
    return response.data;
  }

  authenticate(credential) {
    const pass = credential.password;
    const user = credential.username;
    const url = `${ApiDomainURI}/oauth/token?grant_type=password&username=${user}&password=${pass}`;
    return axios.post(url, {
      grant_type: 'password',
      username: user,
      password: pass
    }, {
      headers: {'Authorization': 'Basic Y2xpZW50OnNlY3JldA=='}
    })
      .then(this.onSuccessfullAuthenticate)
      .catch(Promise.reject);
  }
}
