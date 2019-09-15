import React from 'react';
import './MultiSelect.css';

function MultiSelect(props) {
  const {options, selected, handleChangeToSelected, handleChangeToOptions} = props;

  return (
    <div className="multi-select">
      <h5>Unselected Options</h5>
      <ul>
        {
         options.map((option) =>
            <li key={option.id.toString()}><button onClick={() => handleChangeToSelected(option)}>Change</button> {option.name}</li>
          )
        }
      </ul>

      <h5>Selected Options</h5>
      <ul>
        {
          selected.map((option) =>
            <li key={option.id.toString()}><button onClick={() => handleChangeToOptions(option)}>Change</button> {option.name}</li>
          )
        }
      </ul>
    </div>
  );
}

export default MultiSelect;
