import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Todo from '../../components/Todo/EditTodoModal';
import Adapter from 'enzyme-adapter-react-15'
import toJson from 'enzyme-to-json'

Enzyme.configure({ adapter: new Adapter() });

test('Todo component should render as expected', () => {
  const component = shallow(<EditToDoModal/>);
  const tree = toJson(component);
  console.log(tree);
  expect(tree).toMatchSnapshot();
});