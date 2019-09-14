import React from 'react';
import MultiSelect from './MultiSelect';
import './App.css';

function App() {

  const options = [
    {id: 1, name: 'John'}, 
    {id: 2, name: 'Robert'}
  ];

  return (
    <div className="app">
      Please, select the chosen ones.
      <MultiSelect options={options} / >
    </div>
  );
}

export default App;