import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
// import AppHeader from './components/AppHeader';
// import RegisterLoginForm from './components/RegisterLoginForm';
// import OrderHistory from './components/OrderHistory';
// import TestComponent from './components/TestComponent';
import AdminPanel from './components/AdminPanel';

// ReactDOM.render(<AppHeader />, document.querySelector('#root'));
// ReactDOM.render(<RegisterLoginForm />, document.querySelector('#root'));
// ReactDOM.render(<OrderHistory />, document.querySelector('#root'));
// ReactDOM.render(<TestComponent />, document.querySelector('#root'));
// ReactDOM.render(<Modal />, document.querySelector('#root'));
ReactDOM.render(
  <BrowserRouter>
    <Route component={AdminPanel} />
  </BrowserRouter>,
  document.querySelector('#root'),
);
