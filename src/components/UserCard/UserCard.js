import React from 'react';
import './UserCard.css';

const UserCard = ({ userNumber, changeNumberOfUsers, currentNumberOfUsers }) => {
  return (
    <div className={`card ${currentNumberOfUsers === userNumber ? 'active' : 'inactive'}`} onClick={()=> changeNumberOfUsers(userNumber)}>
      <p className="card-info">{userNumber} Servings</p>
    </div>
  );
}

export default UserCard;