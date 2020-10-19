import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Header } from '../../components';
import { Home, Detail } from '../../pages';

export default function MainRoute() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/detail/:id' component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}
