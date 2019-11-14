import React from 'react';
import UserCard from './UserCard';
import styled from 'styled-components';

const UserBox = styled.div`
    height: 75vh;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: stretch;
    align-content: center;
    margin: 2rem;
`
const colorArray = [ '#F1CE44', '#A4456A', '#FE902A', '#5C802D', '#89906F', '#ECA37B', '#276A59'];

const UserList = (props) => {
    return (
        <UserBox>
            {props.users.map((user, index) => {
                return <UserCard user={user} 
                    key={user.username} 
                    customColor={colorArray[index%colorArray.length]}/>
            })}
        </UserBox>
    )
}

export default UserList;