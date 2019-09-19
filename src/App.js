import React from 'react';
import MultiSelect from './components/MultiSelect';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      options: [
        {id: 1, name: 'John'}, 
        {id: 2, name: 'Robert'}, 
        {id: 4, name: 'Cersei'},
        {id: 5, name: 'Nedd'}, 
        {id: 6, name: 'Bran'},
        {id: 7, name: 'Ramsey'}, 
        {id: 8, name: 'Twin'},
        {id: 9, name: 'Tyrion'}, 
        {id: 10, name: 'Sansa'}
      ],
      selected: [{id: 3, name: 'Peter'}]
    }
    this.handleChangeToOptions = this.handleChangeToOptions.bind(this);
    this.handleChangeToSelected = this.handleChangeToSelected.bind(this);
    this.handleSelectAll = this.handleSelectAll.bind(this);
    this.handleUnselectAll = this.handleUnselectAll.bind(this);
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

  handleChangeToOptions(optionSelected) {
    let selected = this.state.selected.filter((currentSelected) => {
      return currentSelected.id !== optionSelected.id;
    });
    this.setState(state => ({selected: selected}));
    let options = this.state.options;
    options.push(optionSelected)
    this.setState(state => ({options: options}));
  }

  handleSelectAll() {
    this.setState(state => ({
      selected: state.selected.concat(state.options),
      options: []
    }));
  }

  handleUnselectAll() {
    this.setState(state => ({
      options: state.options.concat(state.selected),
      selected: []
    }));
  }

  render() { 
    return (
      <div className="app">
        <h2>Please, select the chosen ones.</h2>
        <MultiSelect options={this.state.options} 
                     selected={this.state.selected} 
                     handleChangeToOptions={this.handleChangeToOptions}
                     handleChangeToSelected={this.handleChangeToSelected}
                     handleSelectAll={this.handleSelectAll}
                     handleUnselectAll={this.handleUnselectAll}/>

        <h4>Nasty var: {process.env.REACT_APP_NASTY_VAR} </h4>
        
      </div>
    )
  };
}

export default App;