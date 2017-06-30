import alt from '../common/alt.jsx';
// import history from '../common/history.jsx';
import DiscussionActions from '../actions/discussion.actions.jsx';
import DiscussionSource from '../sources/discussion.source.jsx';

class DiscussionStore {

  constructor() {
    this.bindActions( DiscussionActions );
    this.registerAsync( DiscussionSource );
    this.discussions = [];
  }

  discussionLoad() {
    this.getInstance().callLoadDiscussion();
  }

  discussionLoaded( response ) {
    if ( response && response.data ) {
      this.setState( { discussions: response.data || [] } );
    }
  }

  discussionCreate() {
    this.getInstance().callDiscussionCreate( );
  }

  discussionUpdate() {
    this.getInstance().callDiscussionUpdate();
  }

  discussionDelete( id ) {
    this.getInstance().callDiscussionDelete( id );
  }

  discussionCreated() {
    //  history.navigate( '/vendors' )
    console.log( 'created' );
  }

  discussionUpdated() {
    // history.navigate( '/vendors' );
    console.log( 'updated' );
  }

  discussionUpdated() {
    // history.navigate( '/vendors' );
    console.log( 'deleted' );
  }

  fail( response ) {
    return Promise.reject( response );
  }

  done() { }

}

export default alt.createStore( DiscussionStore, 'DiscussionStore' );
