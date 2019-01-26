import React from 'react';

const TableRow = ({
  deleteRow = null,
  openModal = null,
  item: { id, date, price, address, rating },
}) => (
  <tr>
    <td>{date}</td>
    <td>{price} $</td>
    <td>{address}</td>
    <td>{rating} / 10</td>
    <td>
      <button onClick={() => openModal(id)}>More...</button>
    </td>
    <td>
      <button onClick={() => deleteRow(id)}>Delete</button>
    </td>
  </tr>
);

export default TableRow;

// import React, {Component} from 'react';
// import Modal from "../Modal";

// export default class TableRow extends Component {

//   state = {
//     isModalOpen: false
//   };

//   openModal = () => this.setState({isModalOpen: true});
//   closeModal = () => this.setState({isModalOpen: false});
//   render() {
//     const { id, date, price, address, rating } = this.props.item;
//     const { deleteRow } = this.props;
//     return (
//       <tr>
//         <td>{date}</td>
//         <td>{price} $</td>
//         <td>{address}</td>
//         <td>{rating} / 10</td>
//         <td>
//           <button onClick={this.openModal}>More...</button>
//           {this.state.isModalOpen && <Modal order={this.props.item} onClose={this.closeModal}>
//           <h2>Order details</h2>
//           <div>
//             <h4>Date: {date}</h4>
//             <h4>Price: {price}</h4>
//             <h4>Address: {address}</h4>
//             <h4>Rating: {rating}</h4>
//           </div>
//           <button type="button" onClick={this.closeModal}>
//             Close
//           </button></Modal>}
//         </td>
//         <td>
//           <button onClick={() => deleteRow(id)}>Delete</button>
//         </td>
//       </tr>
//     );
//   }
// };
