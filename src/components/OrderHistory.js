import React, { Component } from 'react';
import * as api from './api/api';
import TableRow from './order-history/TableRow';

export default class OrderHistory extends Component {
  state = {
    orders: null,
  };

  getOrders = () => {
    api.getOrderHistory().then(data => this.setState({ orders: data }));
  };

  render() {
    const { orders } = this.state;
    console.log(orders);
    return (
      <table>
        <thead>
          <th>
            <td>Date</td>
            <td>Price</td>
            <td>Deivery address</td>
            <td>Rating</td>
          </th>
        </thead>
        <tbody>
          {orders.map(order => (
            <TableRow item={order} />
          ))}
        </tbody>
      </table>
    );
  }
}
