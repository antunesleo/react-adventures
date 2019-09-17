import React from 'react';
import ReactDOM from 'react-dom';
import MultiSelect from './MultiSelect';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const options = [
    {id: 1, name: 'John'}, 
    {id: 2, name: 'Robert'}
  ];
  const selected = [];


  ReactDOM.render(<MultiSelect options={options} selected={selected} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders title for unselected options', () => {
  const options = [
    {id: 1, name: 'John'}, 
    {id: 2, name: 'Robert'}
  ];
  const selected = [];
  const wrapper = shallow(<MultiSelect options={options} selected={selected}/>);
  const title = <h5>Unselected Options</h5>;
  expect(wrapper).toContainReact(title);  
})

it('renders title for selected options', () => {
  const options = [
    {id: 1, name: 'John'}, 
    {id: 2, name: 'Robert'}
  ];
  const selected = [{id: 3, name: 'Peter'}];

  const wrapper = shallow(<MultiSelect options={options} selected={selected}/>);
  const title = <h5>Selected Options</h5>;
  expect(wrapper).toContainReact(title);
})
