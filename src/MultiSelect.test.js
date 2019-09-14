import React from 'react';
import ReactDOM from 'react-dom';
import MultiSelect from './MultiSelect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const options = [
    {id: 1, name: 'John'}, 
    {id: 2, name: 'Robert'}
  ];
  ReactDOM.render(<MultiSelect options={options} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

