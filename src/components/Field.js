import React from 'react';

function Field(props) {
    return (<div>
        <label for={props.id}>{props.name}</label>
        £<input type="text" id={props.id} onChange={props.func}></input>
    </div>);
}

export default Field;
