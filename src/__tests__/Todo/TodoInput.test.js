import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import TodoInput from '../../components/Todo/TodoInput';
import Adapter from 'enzyme-adapter-react-15'
import toJson from 'enzyme-to-json'


Enzyme.configure({ adapter: new Adapter() });

test('Todo component should render as expected', () => {
  const component = shallow(<TodoInput/>);
  console.log(component);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});