import React from 'react';
import './MultiSelect.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import ButtonChange from './ButtonChange'
import Option from './Option';

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
                      <Option option={option}
                              handleChange={handleChangeToSelected}
                              icon={<FontAwesomeIcon icon={faAngleRight}/>}/>
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
                        <Option option={option}
                              handleChange={handleChangeToOptions}
                              icon={<FontAwesomeIcon icon={faAngleLeft}/>}/>
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
