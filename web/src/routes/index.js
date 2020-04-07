import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';

import Deliveries from '~/pages/Deliveries';
import Deliverymen from '~/pages/Deliverymen';
import Recipients from '~/pages/Recipients';
import Problems from '~/pages/Problems';

import DeliveryRegister from '~/pages/Deliveries/DeliveryRegister';
import DeliveryEdit from '~/pages/Deliveries/DeliveryEdit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/deliveries" exact component={Deliveries} isPrivate />
      <Route path="/deliverymen" exact component={Deliverymen} isPrivate />
      <Route path="/recipients" exact component={Recipients} isPrivate />
      <Route path="/problems" exact component={Problems} isPrivate />

      <Route
        exact
        path="/deliveries/register"
        component={DeliveryRegister}
        isPrivate
      />
      <Route
        exact
        path="/deliveries/edit/:id"
        component={DeliveryEdit}
        isPrivate
      />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
