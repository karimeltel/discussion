import {hashHistory} from 'react-router';
hashHistory.navigate = location => setTimeout(() => hashHistory.push(location), 0);
hashHistory.back = () => setTimeout(() => hashHistory.goBack(), 0);
hashHistory.getCurrentLocation = () => {
  const base = window.location.origin;
  const path = window.location.pathname;
  const saltedHash = window.location.href.replace(base + path + '#/', '');
  const saltMatcher = new RegExp('\\?_k=.+$', 'igm');
  return saltedHash.replace(saltMatcher, '');
};
export default hashHistory;
