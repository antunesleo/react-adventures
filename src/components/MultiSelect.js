import React from 'react';
import './MultiSelect.css';

function MultiSelect(props) {
  const {options, selected, handleChangeToSelected, handleChangeToOptions, handleSelectAll, handleUnselectAll} = props;

  return (
    <div className="multi-select">
      <div className="card">
        <div className="card-body">

          <div className="container">
            <div className="row">
              <div className="col">          
                <h5>Unselected Options <button type="button" className="btn btn-primary" onClick={handleSelectAll}>Change all</button></h5>
                <div className="options-list">
                  <ul className="list-group">
                    {
                    options.map((option) =>
                        <li className="list-group-item" key={option.id.toString()}><button onClick={() => handleChangeToSelected(option)} type="button" className="btn btn-secondary">Change</button>  {option.name}</li>
                      )
                    }
                  </ul>
                </div>
              </div>
              <div className="col"> 
                <h5>Selected Options <button type="button" className="btn btn-primary" onClick={handleUnselectAll}>Change all</button></h5>
                <div className="selected-list">
                  <ul className="list-group">
                    {
                      selected.map((option) =>
                        <li className="list-group-item" key={option.id.toString()}><button onClick={() => handleChangeToOptions(option)} type="button" className="btn btn-secondary">Change</button>  {option.name}</li>
                      )
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultiSelect;
