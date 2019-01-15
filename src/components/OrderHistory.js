import React, { Component } from 'react';
import orderHistory from '../order-history.json';
import TableRow from './order-history/TableRow';
import AddToHistory from './order-history/AddToHistory';
import shortid from "shortid";

export default class OrderHistory extends Component {
  state = {
    orders: [],
  };

  componentDidMount() {
    this.getOrders();
  }

  getOrders = () => this.setState({ orders: orderHistory });

  handleDeleteOrderFromHistory = id => {
    const newOrderHistory = this.state.orders.filter(item => item.id !== id);
    this.setState({ orders: newOrderHistory });
  };

  maxID = arr => arr.reduce((acc, elem) => elem.id > acc ? elem.id : acc, 0);

  addID = obj => {
    const newObj = Object.assign({}, obj, { id: this.maxID(this.state.orders) + 1 });
    // obj.id = this.maxID(this.state.orders) + 1;
    return newObj;
  }

  handleAddToHistory = (obj) => {
    const { orders } = this.state;
    this.setState(prevState => ({ orders: [...prevState.orders, obj] }));
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
