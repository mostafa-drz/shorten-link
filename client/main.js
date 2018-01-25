import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';

import { Tracker } from 'meteor/tracker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../imports/ui/reducers';
import { getUser } from '../imports/ui/actions/auth';
import App from '../imports/ui/components/App';

const store = createStore(reducers);


Tracker.autorun(()=>{
  const user = Meteor.user();
  store.dispatch(getUser({ user }));
});

Meteor.startup(() => {
  ReactDOM.render( 

    <Provider store={store}>
      <App/>
    </Provider >

    ,document.getElementById('app'));
})