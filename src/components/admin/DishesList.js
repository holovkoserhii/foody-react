import React from 'react';
import { Link } from 'react-router-dom';

const DishesList = ({ dishes = [] }) => {
  return (
    <>
      <h4>Dishes list:</h4>
      <ul>
        {dishes.map(({ id, image, price, name }) => (
          <li key={id}>
            <Link to={`/dish/${id}`}>
              <h4>{name}</h4>
              <p>{price}</p>
              <img alt={name} src={image} width="200" />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DishesList;
