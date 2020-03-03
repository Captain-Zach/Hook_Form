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
            // this populates the rest of the form entries so that they 
            // aren't overwritten with blanks when updating the state.
            ...formState,
            [e.target.name]: e.target.value
        });
    }
    let message1;
    let message2;
    let message3;
    let message4;
    let message5;
    let firstName = formState.firstName;
    let lastName = formState.lastName;
    let email = formState.email;
    let password = formState.password;
    let confirmPassword = formState.confirmPassword;
    if(firstName.length < 2 && firstName.length > 0){
        message1=<p>First Name must be longer than 2 characters</p>
    }
    if(lastName.length < 2 && lastName.length > 0){
        message2=<p>Last Name must be longer than 2 characters</p>
    }
    if(email.length < 5 && email.length > 0){
        message3=<p>Email must be longer than 5 characters</p>
    }
    if(password.length < 8 && password.length > 0){
        message4=<p>Password must be longer than 7 characters</p>
    }
    if(confirmPassword != password && confirmPassword.length > 0){
        message5=<p>Passwords must match!</p>
    }
    return (
        <div>
            <Input type="text" name="firstName" label="First Name" setState={changeHandler} />
                {message1}
            <Input type="text" name="lastName" label="Last Name" setState={changeHandler} />
                {message2}
            <Input type="email" name="email" label="Email" setState={changeHandler} />
                {message3}
            <Input type="password" name="password" label="Password" setState={changeHandler} />
                {message4}
            <Input type="password" name="confirmPassword" label="Confirm Password" setState={changeHandler} />
                {message5}
            <DisplayCard info={formState} />
        </div>
    );
}
export default Wrapper;