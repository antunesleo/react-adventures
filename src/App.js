import React from 'react';
import MultiSelect from './MultiSelect';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      options: [
        {id: 1, name: 'John'}, 
        {id: 2, name: 'Robert'}
      ],
      selected: [{id: 3, name: 'Peter'}]
    }
    this.handleChangeToOptions = this.handleChangeToOptions.bind(this);
    this.handleChangeToSelected = this.handleChangeToSelected.bind(this);
  }

  handleChangeToSelected(option) {
    let options = this.state.options.filter((currentOption) => {
      return currentOption.id !== option.id;
    });
    this.setState(state => ({options: options}));
    let selected = this.state.selected;
    selected.push(option)
    this.setState(state => ({selected: selected}));
  }

  handleChangeToOptions(option) {

  }

  render() { 
    return (
      <div className="app">
        <h2>Please, select the chosen ones.</h2>
        <MultiSelect options={this.state.options} selected={this.state.selected} 
                     handleChangeToOptions={this.handleChangeToOptions}
                     handleChangeToSelected={this.handleChangeToSelected}/>
      </div>
    )
  };
}

export default App;