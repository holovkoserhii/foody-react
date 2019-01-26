import React, { Component } from 'react';
import TableRow from './order-history/TableRow';
import AddToHistory from './order-history/AddToHistory';
import Spinner from './Spinner';
import Modal from './Modal';
import shortid from 'shortid';
import { fetchOrders } from './api/api';

const INITIAL_STATE = {
  orders: [],
  isLoading: false,
  isModalOpen: false,
  selectedId: null,
};

export default class OrderHistory extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    this.setState(prevState => ({ ...prevState, isLoading: true }));
    this.fetchOrdersFromDB();
  }

  getOrders = allOrders =>
    this.setState({ ...INITIAL_STATE, orders: allOrders });

  fetchOrdersFromDB = () => {
    fetchOrders()
      .then(data => this.getOrders(data))
      .catch(err => console.log(err));
  };

  handleDeleteOrderFromHistory = id => {
    const newOrderHistory = this.state.orders.filter(item => item.id !== id);
    this.setState(prevState => ({ ...prevState, orders: newOrderHistory }));
  };

  handleAddToHistory = obj => {
    let { price, date } = obj;
    date = date
      .split('-')
      .reverse()
      .join('/');
    obj = { ...obj, date: date, price: price + '.00' };
    const newObj = Object.assign(obj, { id: shortid.generate() });
    this.setState(prevState => ({
      ...prevState,
      orders: [...prevState.orders, newObj],
    }));
  };

  openModal = id => {
    console.log(id);
    this.setState(prevState => ({
      ...prevState,
      isModalOpen: true,
      selectedId: id,
    }));
  };

  closeModal = () =>
    this.setState(prevState => ({ ...prevState, isModalOpen: false }));

  passSelectedOrder = () =>
    this.state.orders.find(el => el.id === this.state.selectedId);

  render() {
    const { orders } = this.state;
    const { isModalOpen, isLoading } = this.state;

    return (
      <>
        {isModalOpen && (
          <Modal
            selected={this.passSelectedOrder()}
            onClose={this.closeModal}
          />
        )}
        <AddToHistory onAdd={this.handleAddToHistory} />
        {isLoading ? (
          <Spinner />
        ) : (
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
                    key={order.id}
                    item={order}
                    deleteRow={this.handleDeleteOrderFromHistory}
                    openModal={this.openModal}
                  />
                ))}
            </tbody>
          </table>
        )}
      </>
    );
  }
}
