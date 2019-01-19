import React, { Component } from 'react';
import orderHistory from '../order-history.json';
import TableRow from './order-history/TableRow';
import AddToHistory from './order-history/AddToHistory';
import Spinner from "./Spinner";
import shortid from "shortid";

export default class OrderHistory extends Component {
  state = {
    orders: [],
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getOrders();
  }

  getOrders = () => this.setState({ orders: orderHistory });

  handleDeleteOrderFromHistory = id => {
    const newOrderHistory = this.state.orders.filter(item => item.id !== id);
    this.setState({ orders: newOrderHistory });
  };

  handleAddToHistory = (obj) => {
    const newObj = Object.assign(obj, {id: shortid.generate()});
    this.setState(prevState => ({ orders: [...prevState.orders, newObj] }));
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
