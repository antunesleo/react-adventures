import React from 'react';

function ButtonChange(props) {

  return (
      <button onClick={props.handleChange} type="button" className="btn btn-secondary">
        {props.icon}
      </button>
  );
}

export default ButtonChange;
