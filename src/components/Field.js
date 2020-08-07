import React from 'react';
import newId from '../utils/newid';

function Field(props) {
    let id = props.id ? props.id : newId(props.prefix);
    return (<>
        <label htmlFor={id}>{props.name}</label>
        <input type="text" id={id} value={props.value} onChange={props.func}></input>
    </>);
}

export default Field;
