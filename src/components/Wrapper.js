import React, { useState } from 'react';

import Input from'./Input';
import DisplayCard from './DisplayCard';

const Wrapper = () => {
    const [formState, setFormState] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    });
    const changeHandler = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    }
    return (
        <div>
            <Input type="text" name="firstName" label="First Name" setState={changeHandler} />
            <Input type="text" name="lastName" label="Last Name" setState={changeHandler} />
            <Input type="email" name="email" label="Email" setState={changeHandler} />
            <Input type="password" name="password" label="Password" setState={changeHandler} />
            <Input type="password" name="confirmPassword" label="Confirm Password" setState={changeHandler} />
            <DisplayCard info={formState} />
        </div>
    );
}
export default Wrapper;