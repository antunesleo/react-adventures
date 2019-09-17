import React from 'react';
import './MultiSelect.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

function MultiSelect(props) {
  const {options, selected, handleChangeToSelected, handleChangeToOptions, handleSelectAll, handleUnselectAll} = props;

  return (
    <div className="multi-select">
      <div className="card">
        <div className="card-body">

          <div className="container">
            <div className="row">
              <div className="col">          
                <h5>Unselected Options <button type="button" className="btn btn-primary" onClick={handleSelectAll}><FontAwesomeIcon icon={faAngleDoubleRight} /></button></h5>
                <div className="list options-list">
                  <ul className="list-group">
                    {options.length === 0 && (
                      <span className="no-items-warning">No items.</span>
                    )}
                    {
                    options.map((option) =>
                        <li className="list-group-item" key={option.id.toString()}>
                        <div class="row">
                          <div class="col-sm-10">
                            {option.name}
                          </div>
                          <div class="class-sm-2">
                            <button onClick={() => handleChangeToSelected(option)} type="button" className="btn btn-secondary">
                              <FontAwesomeIcon icon={faAngleRight}/>
                            </button> 
                          </div>
                        </div>
                        </li>
                      )
                    }
                  </ul>
                </div>
              </div>
              <div className="col"> 
                <h5>Selected Options <button type="button" className="btn btn-primary" onClick={handleUnselectAll}><FontAwesomeIcon icon={faAngleDoubleLeft} /></button></h5>
                <div className="list selected-list">
                  <ul className="list-group">
                    {selected.length === 0 && (
                      <span className="no-items-warning">No items.</span>
                    )}
                    {
                      selected.map((option) =>
                        <li className="list-group-item" key={option.id.toString()}>
                          <div class="row">
                            <div class="col-sm-2">
                              <button onClick={() => handleChangeToOptions(option)} type="button" className="btn btn-secondary">
                                <FontAwesomeIcon icon={faAngleLeft} />
                              </button>
                            </div>
                            <div class="col-sm-10">
                              {option.name}
                            </div>
                          </div>
                        </li>
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
