import React, { Component } from 'react';
import orderHistory from '../order-history.json';
import TableRow from './order-history/TableRow';
import AddToHistory from './order-history/AddToHistory';

export default class OrderHistory extends Component {
  state = {
    orders: null,
  };

  componentDidMount() {
    this.getOrders();
  }

  componentDidUpdate(prevState) {
    return JSON.stringify(prevState) !== JSON.stringify(this.state);
  }

  getOrders = () => this.setState({ orders: orderHistory });

  handleDeleteOrderFromHistory = id => {
    const newOrderHistory = this.state.orders.filter(item => item.id !== id);
    this.setState({ orders: newOrderHistory });
  };

  handleAddToHistory = (obj, evt) => {
    evt.preventDefault();
    console.log(evt);
    console.log(obj);
  };

  render() {
    const { orders } = this.state;
    return (
      <>
        <AddToHistory onAdd={this.handleAddToHistory} />
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Price</th>
              <th>Delivery address</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map(order => (
                <TableRow
                  item={order}
                  deleteRow={this.handleDeleteOrderFromHistory}
                />
              ))}
          </tbody>
        </table>
      </>
    );
  }
}
