import React, {useCallback} from 'react';

function Field(props) {

    const afterCreate = useCallback(node => {

        // 'Pending' transation fields
        if (node && props.class.includes('pending') && props.dataId >= props.initialStatePending) { // > Can we dynamically get the value of pending.length instead of using '2'?
            node.focus();
        }
    }, []);

    return (<div className="form-group">
        <label htmlFor={props.id}>{props.name}</label>
        <div className="input-group">
            <input type="text" autoFocus={props.focus} className={props.class} id={props.id} data-id={props.dataId} value={props.value} ref={afterCreate} onChange={props.handler}></input>
        </div>
    </div>);
}

export default Field;
