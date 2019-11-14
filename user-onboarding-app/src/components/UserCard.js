import React from 'react';
import styled from 'styled-components';



const StyledCard = styled.div`
    width: 32vw;
    max-height: 32vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
    border-radius: 4px;
    padding: 1rem;
`

const UserCard = ({ user, customColor }) => {

    return (
        <StyledCard style={{ background: customColor }}>
            <h2>{user.username}</h2>
            <h3>{user.role}</h3>
            <p>{user.email}</p>
        </StyledCard>
    )
}

export default UserCard;