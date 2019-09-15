import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders title message', () => {
  const wrapper = shallow(<App />);
  const title = <h2>Please, select the chosen ones.</h2>;
  expect(wrapper).toContainReact(title);
});
