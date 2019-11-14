import React from 'react';

const UserCard = ( {user}) => {
    return (
        <div key={user.username} style={{border: '3px solid red'}}>
            <h2>{user.username}</h2>
            <p>{user.email}</p>
        </div>
    )
}

export default UserCard;