import React from 'react';

const AddToHistory = props => {
  console.log(props);
  return (
    <form>
      Date: <input type="date" required />
      <br />
      Price: <input type="number" placeholder="Enter the price" required />
      <br />
      Address: <input type="text" placeholder="Enter the address" required />
      <br />
      Rating: <input type="number" placeholder="Enter the rating" required />
      <br />
      <button type="submit" onClick={() => props.onAdd({ a: 4 })}>
        Add to history
      </button>
      <br />
      <br />
    </form>
  );
};

export default AddToHistory;
