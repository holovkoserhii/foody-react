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

  maxID = arr => arr.reduce((acc, elem) => {
    return elem.id > acc ? elem.id : acc
  }, 0);

  handleAddToHistory = (evt, obj) => {
    evt.preventDefault();
    const orders = this.state.orders;
    orders.push(obj);
    this.setState({orders: orders});
    console.log(this.state);
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
              orders.map(order => {
                console.log(order);
                return (
                  <TableRow key={order.id}
                    item={order}
                    deleteRow={this.handleDeleteOrderFromHistory}
                  />
                )
              })}
          </tbody>
        </table>
      </>
    );
  }
}
