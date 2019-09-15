import React from 'react';
import './MultiSelect.css';

function MultiSelect(props) {
  console.log("props", props)
  const {options} = props;

  return (
    <div className="multi-select">
      <h5>Unselected Options</h5>
      <ul>
        {
          options.filter((option) => !option.selected).map((option) =>
            <li key={option.id.toString()}><input type="checkbox"></input> {option.name}</li>
          )
        }
      </ul>

      <h5>Selected Options</h5>
      <ul>
        {
          options.filter((option) => option.selected).map((option) =>
            <li key={option.id.toString()}><input type="checkbox"></input> {option.name}</li>
          )
        }
      </ul>
    </div>
  );
}

export default MultiSelect;
