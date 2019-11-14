import React from 'react';

const UserList = (props) => {
    return (
        <div>
            {props.users.map(user => {
                return <div key={user.username}>
                    <h2>{user.username}</h2>
                    <p>{user.email}</p>
                </div>
            })}
        </div>
    )
}

export default UserList;