import React from 'react';

const DisplayCard = ({info}) => {
    return (
        <div>
            <p>First Name: {info.firstName}</p>
            <p>
                Last Name: {info.lastName}
            </p>
            <p>
                Email: {info.email}
            </p>
            <p>
                Password: {info.password}
            </p>
            <p>
                Confirm Password: {info.confirmPassword}
            </p>
        </div>
    );
}
export default DisplayCard;