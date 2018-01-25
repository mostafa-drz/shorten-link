import React from 'react';
import SignUp from './SignUp';
import Link from './Link';
import NotFound from './NotFound';
import LogIn from './LogIn';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RequireAuth from './helpers/_require_auth';
import OnlyUnauth from './helpers/_only_unauth';

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/links" component={RequireAuth(Link)} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;