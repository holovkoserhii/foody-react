import React from 'react';

const TableRow = props => {
  const { id, date, price, address, rating } = props.item;
  const { deleteRow } = props;
  return (
    <tr>
      <td>{date}</td>
      <td>{price} $</td>
      <td>{address}</td>
      <td>{rating} / 10</td>
      <td>
        <button>More...</button>
      </td>
      <td>
        <button onClick={() => deleteRow(id)}>Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;
