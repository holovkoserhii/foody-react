import React from 'react';

const UserPicName = ({ name, userPic, children }) => (
  <div>
    <img src={userPic} alt="userPic" height="50" width="50" />
    <h3>{name}</h3>
    {children}
  </div>
);

export default UserPicName;
