import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Dragons from '../pages/Dragons';
import Dragon from '../pages/Dragon';

export default function Routes() {
  return (
    <Switch>
      <Route path="/dragon/edit/:id">
        <Dragon />
      </Route>
      <Route path="/dragon/new">
        <Dragon />
      </Route>
      <Route path="/dragons">
        <Dragons />
      </Route>
      <Route path="/">
        <SignIn />
      </Route>
    </Switch>
  );
}
