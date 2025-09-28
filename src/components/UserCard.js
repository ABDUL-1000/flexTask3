import React from 'react';

const UserCard = ({ name, age, role }) => {
  return (
    <div className="user-card">
      <h4>{name}</h4>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
};

export default UserCard;