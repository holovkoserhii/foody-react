import React from 'react';

const UserMenu = ({ items }) => (
  <div>
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <a href="%">{item.item}</a>
        </li>
      ))}
    </ul>
    <button>Logout</button>
  </div>
);

export default UserMenu;
