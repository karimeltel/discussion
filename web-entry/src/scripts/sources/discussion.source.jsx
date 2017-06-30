import DiscussionActions from '../actions/discussion.actions.jsx';
import $http from '../common/http.jsx';
const base = $http.instance.apiDomainURI;

export default {
  callLoadDiscussion: {
    remote() {
      const url = `${base}/discussion`;
      return $http.instance.api.get( url );
    },
    success: DiscussionActions.discussionLoaded,
    error: DiscussionActions.fail
  },
  callDiscussionCreate: {
    remote( state, data ) {
      const url = `${base}/discussion`;
      return $http.instance.api.post( url, data );
    },
    success: DiscussionActions.discussionCreated,
    error: DiscussionActions.fail
  },
  callDiscussionUpdate: {
    remote( state, data ) {
      const url = `${base}/discussion/${data.id}`;
      return $http.instance.api.put( url, data );
    },
    success: DiscussionActions.discussionUpdated,
    error: DiscussionActions.fail
  },
  callDiscussionDelete: {
    remote( state, id ) {
      const url = `${base}/discussion/${id}`;
      return $http.instance.api.delete( url );
    },
    success: DiscussionActions.discussionUpdated,
    error: DiscussionActions.fail
  }
};
