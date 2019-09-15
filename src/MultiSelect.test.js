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
  ReactDOM.render(<MultiSelect options={options} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// How to test this without put the input????
it('renders unselected options', () => {
  const options = [
    {id: 1, name: 'John'}, 
    {id: 2, name: 'Robert'},
    {id: 3, name: 'Peter', 'selected': true}
  ];
  const wrapper = shallow(<MultiSelect options={options} />);
  const unselectedOptions = <ul>
    <li key="1"><input type="checkbox"></input> John</li>
    <li key="2"><input type="checkbox"></input> Robert</li>
  </ul>;
  expect(wrapper).toContainReact(unselectedOptions);
})

it('renders title for unselected options', () => {
  const options = [
    {id: 1, name: 'John'}, 
    {id: 2, name: 'Robert'}
  ];
  const wrapper = shallow(<MultiSelect options={options} />);
  const title = <h5>Unselected Options</h5>;
  expect(wrapper).toContainReact(title);  
})

it('renders checkbox for each option in unselected options', () => {
  const options = [
    {id: 1, name: 'John'}, 
    {id: 2, name: 'Robert'}
  ];
  const wrapper = shallow(<MultiSelect options={options} />);
  const li1 = <li key="1"><input type="checkbox"></input> John</li>;
  const li2 = <li key="2"><input type="checkbox"></input> Robert</li>;

  expect(wrapper).toContainReact(li1);
  expect(wrapper).toContainReact(li2);
});

it('renders title for selected options', () => {
  const options = [
    {id: 1, name: 'John'}, 
    {id: 2, name: 'Robert'}
  ];
  const wrapper = shallow(<MultiSelect options={options} />);
  const title = <h5>Selected Options</h5>;
  expect(wrapper).toContainReact(title);
})

it('renders selected options', () => {
  const options = [
    {id: 1, name: 'John'}, 
    {id: 2, name: 'Robert'},
    {id: 3, name: 'Peter', 'selected': true}
  ];
  const wrapper = shallow(<MultiSelect options={options} />);
  const selectedOptions = <ul>
    <li key="1"><input type="checkbox"></input> Peter</li>
  </ul>;
  expect(wrapper).toContainReact(selectedOptions);
});

