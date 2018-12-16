import React from 'react';

const TableRow = ({ date, price, address, rating }) => (
  <tr>
    <td>{date}</td>
    <td>{price} $</td>
    <td>{address}</td>
    <td>{rating} / 10</td>
  </tr>
);

export default TableRow;
