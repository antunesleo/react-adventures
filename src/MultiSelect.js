import React from 'react';
import './MultiSelect.css';

function MultiSelect(props) {
  console.log("props", props)
  const {options} = props;

  return (
    <div className="multi-select">
      <ul>
        {
          options.map((option) =>
            <li key={option.id.toString()}>{option.name}</li>
          )
        }
    </ul>
    </div>
  );
}

export default MultiSelect;
