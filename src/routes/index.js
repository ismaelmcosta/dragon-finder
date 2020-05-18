import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Dragons from '../pages/Dragons';
import Dragon from '../pages/Dragon';

export default function Routes() {
  return (
    <Switch>
      <Route path="/dragon/edit/:id" component={Dragon} isPrivate />
      <Route path="/dragon/new" component={Dragon} isPrivate />
      <Route path="/dragons" component={Dragons} isPrivate />
      <Route path="/" component={SignIn} />
    </Switch>
  );
}
