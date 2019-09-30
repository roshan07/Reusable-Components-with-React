import React from 'react';

const Input = (props) => {
    return (
        <input value={props.inputValue} onChange={props.handleChange} placeholder={props.placeholder}></input>
    )
}

export default Input;