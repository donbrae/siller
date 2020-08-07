import React from 'react';
import newId from '../utils/newid';

function Button(props) {
    let id = props.id ? props.id : newId(props.prefix);
    return (<button id={id} onClick={props.func}>{props.name}</button>);
}

export default Button;
