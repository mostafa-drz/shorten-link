import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';

import { Tracker } from 'meteor/tracker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../imports/ui/reducers';
import { LogIn } from '../imports/ui/actions/auth';
import App from '../imports/ui/components/App';
import thunk from 'redux-thunk';
import { fetchUser } from './../imports/ui/actions/auth';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk)));
store.dispatch(fetchUser());

Meteor.startup(() => {
  ReactDOM.render( 

    <Provider store={store}>
      <App/>
    </Provider >

    ,document.getElementById('app'));
})