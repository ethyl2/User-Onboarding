import React from 'react';
import UserCard from './UserCard';

const UserList = (props) => {
    return (
        <div style={{border: '2px solid black'}}>
            {props.users.map(user => {
                return <UserCard user={user} key={user.username}/>
            })}
        </div>
    )
}

export default UserList;