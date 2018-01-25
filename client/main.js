import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from './../imports/ui/components/SignUp';
import Link from './../imports/ui/components/Link';
import NotFound from './../imports/ui/components/NotFound';
import LogIn from './../imports/ui/components/LogIn';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createHistory from "history/createBrowserHistory"
import { Tracker } from 'meteor/tracker';

const history = createHistory();

const routes = (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={LogIn} />
      <Route exact path="/signup"  component={SignUp} />
      <Route exact path="/links"   component={Link} />
      <Route path="*"        component={NotFound} />
    </Switch>
  </Router>
);


const authenticatedPages = ['/links' ];
const unAuthenticatedPages = ['/', '/signup' ];
Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.user();
  const pathname = history.location.pathname;
  const onPageAuthenticated = authenticatedPages.indexOf(pathname) != -1;
  const onPageUnauthenticated = unAuthenticatedPages.indexOf(pathname) != -1;

  if(!isAuthenticated && onPageAuthenticated){
    history.push('/');
  }else if ( isAuthenticated && onPageUnauthenticated ){
    history.push('/links');
  }

});

Meteor.startup(() => {
  ReactDOM.render( routes, document.getElementById('app'));
})