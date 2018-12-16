import React from 'react';
import appNavItems from './appNavItems';

const AppNav = ({ items }) => (
  <ul>
    {appNavItems.map(item => (
      <li key={item.id}>
        <a href="%">{item.name}</a>
      </li>
    ))}
  </ul>
);

export default AppNav;
