import React from 'react';
import ButtonChange from "./ButtonChange";

class Option extends React.Component {

  handleClick = () => {
    this.props.handleChange(this.props.option);
  };

  render() {
    return (
      <li className="list-group-item" key={this.props.option.id.toString()}>
        <div className="row">

          <div className="col-sm-10">
            {this.props.option.name}
          </div>
          <div className="col-sm-2">
            <ButtonChange handleChange={this.handleClick} icon={this.props.icon}/>
          </div>
        </div>
      </li>
    );
  }
}

export default Option;
