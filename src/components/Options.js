import React from 'react';
import NoItems from './NoItems';
import Option from './Option';

function Options(props) {

  return (
    <div>
      <h5>{props.title} <button type="button" className="btn btn-primary" onClick={props.handleChangeAll}>{props.iconAll}</button></h5>
      <div className="list options-list">
        <ul className="list-group">
          {props.options.length === 0 && (
            <NoItems />
          )}
          {
          props.options.map((option) =>
            <Option option={option}
                    handleChange={props.handleChange}
                    icon={props.icon} />
            )
          }
        </ul>
      </div>
    </div>
  );
}

export default Options;
