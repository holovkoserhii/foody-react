import React from 'react';
import AppLogo from './app-header/AppLogo';
import AppNav from './app-header/AppNav';
import UserPicName from './app-header/UserPicName';
import pic from './app-header/avatar.png';
import UserMenu from './app-header/UserMenu';

const appNavItems = [
  { id: 'id-1', name: 'Menu' },
  { id: 'id-2', name: 'About' },
  { id: 'id-3', name: 'Contact' },
  { id: 'id-4', name: 'Delivery' },
];

const userMenuItems = [
  { id: 'id-1', item: 'Account' },
  { id: 'id-2', item: 'Order history' },
  { id: 'id-3', item: 'Meal planner' },
];

const AppHeader = () => (
  <div>
    <AppLogo />
    <AppNav items={appNavItems} />
    <UserPicName name="Bob Ross" userPic={pic}>
      <UserMenu items={userMenuItems} />
    </UserPicName>
  </div>
);

export default AppHeader;
