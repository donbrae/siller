import React from 'react';

function Checkbox(props) {
    return (<div className="form-check">
        <input className="form-check-input" type="checkbox" id={props.id} onChange={props.handler}/>
        <label className="form-check-label mb-0" htmlFor={props.id}>
            {props.name}
        </label>
    </div>);
}

export default Checkbox;
