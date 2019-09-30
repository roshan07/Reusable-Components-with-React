import React from 'react';

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>{props.label}</button>
    )
}

export default Button;