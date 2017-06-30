import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';

import '../assets/styles.less';
import {Root, Theme} from './theme.jsx';
import History from './common/history.jsx';
import MainScreen from './components/MainScreen.jsx';
import Discussion from './components/Discussion.jsx';

ReactDom.render(
    <MuiThemeProvider muiTheme={Theme}>
        <Router history={History}>
            <Route path="/">
                <IndexRoute component={Discussion}/>
                <Route path="discussion" component={MainScreen}>
                    <IndexRoute component={Discussion}/>
                    <Route path="all" component={Discussion}/>
                    <Route path="create" component={Discussion} />
                    <Route path=":id" component={Discussion}/>
                </Route>
            </Route>
        </Router>
    </MuiThemeProvider>, Root
);
