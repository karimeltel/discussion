import React from 'react';
import AltContainer from 'alt-container';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import AppBar from 'material-ui/AppBar';
import { Card, CardHeader, CardText } from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import history from '../common/history.jsx';
import DiscussionActions from '../actions/discussion.actions.jsx';
import DiscussionStore from '../stores/discussion.store.jsx';
// import EditIcon from 'material-ui/svg-icons/editor/mode-edit';

class DiscussionList extends React.Component {

  constructor( props ) {
    super( props );
    this.actions = this.props.DiscussionActions;
  }

  componentDidMount() {
    this.actions.discussionLoad();
  }

  render() {
    return this.props.DiscussionStore.discussions.map( ( discussion ) => (
      <Card style={{ margin: '5px 0' }}>
        <CardHeader
          title={discussion.id}
          style={{ backgroundColor: '#9fb0c6' }}
          titleStyle={{ color: '#ffffff' }}
          actAsExpander
          showExpandableButton/>
        <CardText expandable>
          {discussion.id}
        </CardText>
      </Card>
    ) );
  }
}

export default class Discussion extends React.Component {
  render() {
    return (
      <div>
        <AppBar title="Discussion"
                iconClassNameRight="muidocs-icon-navigation-expand-more"/>
        <FloatingActionButton primary className="create-discussion"
                              onTouchTap={() => history.navigate('/discussion/create')}>
          <AddIcon />
        </FloatingActionButton>
        <AltContainer stores={{ DiscussionStore }} actions={{ DiscussionActions }}>
          <DiscussionList/>
        </AltContainer>
      </div>
    );
  }
}
