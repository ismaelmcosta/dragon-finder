import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Dragons from '../pages/Dragons';
import Dragon from '../pages/Dragon';

export default function Routes() {
  return (
    <Switch>
      <Route path="/dragon/edit/:id" isPrivate>
        <Dragon />
      </Route>
      <Route path="/dragon/new" isPrivate>
        <Dragon />
      </Route>
      <Route path="/dragons" isPrivate>
        <Dragons />
      </Route>
      <Route path="/">
        <SignIn />
      </Route>
    </Switch>
  );
}
