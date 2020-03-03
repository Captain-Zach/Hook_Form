import React from 'react';

const Input = ({setState, name, label, type}) => (
    <div>
        <label>{label}:</label>
        <input type={type} name={name} onChange={setState}/>
    </div>
);
export default Input;