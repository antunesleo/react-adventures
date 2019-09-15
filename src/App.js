import React from 'react';
import MultiSelect from './MultiSelect';
import './App.css';

function App() {

  const options = [
    {id: 1, name: 'John'}, 
    {id: 2, name: 'Robert'},
    {id: 2, name: 'Peter', selected: true}
  ];

  return (
    <div className="app">
      <h2>Please, select the chosen ones.</h2>
      <MultiSelect options={options} / >
    </div>
  );
}

export default App;