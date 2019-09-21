import React from 'react';
import './MultiSelect.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import Options from './Options'

function MultiSelect(props) {
  const {options, selected, handleChangeToSelected, handleChangeToOptions, handleSelectAll, handleUnselectAll} = props;

  return (
    <div className="multi-select">
      <div className="card">
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col">          
                <Options title="Unselected Options"
                         options={options}
                         handleChangeAll={handleSelectAll}
                         handleChange={handleChangeToSelected}
                         icon={<FontAwesomeIcon icon={faAngleRight} />}
                         iconAll={<FontAwesomeIcon icon={faAngleDoubleRight}/>} />
              </div>
              <div className="col">
                <Options title="Selected Options"
                          options={selected}
                          handleChangeAll={handleUnselectAll}
                          handleChange={handleChangeToOptions}
                          icon={<FontAwesomeIcon icon={faAngleLeft} />}
                          iconAll={<FontAwesomeIcon icon={faAngleDoubleLeft}/>} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultiSelect;
