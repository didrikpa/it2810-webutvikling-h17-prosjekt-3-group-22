import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Todo from '../../components/Todo/Todo';
import Adapter from 'enzyme-adapter-react-15'
import toJson from 'enzyme-to-json'
import moment from 'moment'

Enzyme.configure({ adapter: new Adapter() });

test('Todo component should render as expected', () => {
  const todo = {date: moment('20120620')};
  const component = shallow(<Todo todo={todo}/>);
  const tree = toJson(component);
  console.log(tree);
  expect(tree).toMatchSnapshot();
});

