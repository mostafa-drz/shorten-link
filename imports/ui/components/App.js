import React from 'react';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import NotFound from './NotFound';
import LogIn from './LogIn';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RequireAuth from './helpers/_require_auth';
import OnlyUnauth from './helpers/_only_unauth';
import LogOut from './LogOut';

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={OnlyUnauth(LogIn)} />
        <Route exact path="/signup" component={OnlyUnauth(SignUp)} />
        <Route exact path="/links" component={RequireAuth(Dashboard)} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;