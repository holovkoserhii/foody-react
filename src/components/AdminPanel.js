import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import MenuElement from './admin/MenuElement';
import Menu from './admin/Menu';
// import NotFound from './admin/NotFound';
import AddDish from './admin/AddDish';

export default class AdminPanel extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>Admin panel!</h1>
        <Switch>
          <Route path="/" exact component={Menu} />
          <Route path="/dish/:id" component={MenuElement} />
          <Route path="/add" component={AddDish} />
          {/* <Route component={NotFound} /> */}
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}
