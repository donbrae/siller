import React from 'react';

function Field(props) {
    return (<div>
        <label htmlFor={props.id}>{props.name}</label>
        <input type="text" id={props.id} value={props.value} onChange={props.func}></input>
    </div>);
}

export default Field;
