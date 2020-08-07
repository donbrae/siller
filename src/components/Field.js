import React from 'react';

function Field(props) {
    return (<>
        <label htmlFor={props.id}>{props.name}</label>
        <input type="text" className={props.class} id={props.id} data-id={props.dataId} value={props.value} onChange={props.handler}></input>
    </>);
}

export default Field;
