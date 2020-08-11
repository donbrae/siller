import React from 'react';

function Button(props) {
  return (<button
    id={props.id}
    className={props.class}
    onClick={props.handler}>
    {props.name}
  </button>);
}

export default Button;
