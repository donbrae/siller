import React from 'react';

function Field(props) {

    return (<div className="form-group">
    <label htmlFor={props.id}>{props.name}</label>
        <div className="input-group mb-3">
            <input type="text" className="form-control" id={props.id} data-id={props.dataId} value={props.value} onChange={props.handler}></input>
        </div>
    </div>);
}

export default Field;
