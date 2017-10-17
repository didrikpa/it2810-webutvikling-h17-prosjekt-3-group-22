import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EditTodoModal from '../../components/Todo/EditTodoModal';
import Adapter from 'enzyme-adapter-react-15'
import toJson from 'enzyme-to-json'
import moment from 'moment'


Enzyme.configure({ adapter: new Adapter() });

test('Todo component should render as expected when isOpen is true', () => {
  const tempContent = "Some text to check3";
  const content = "Some text to check2";

  const component = shallow(<EditTodoModal content={content} tempContent={tempContent} date={moment()} isOpen={true}/>);
  const tree = toJson(component);
  console.log(tree);
  expect(tree).toMatchSnapshot();
});

test('Todo component should not render at all when isOpen is false', () => {
  const component = shallow(<EditTodoModal isOpen={false}/>);
  const tree = toJson(component);
  console.log(tree);
  expect(tree).toMatchSnapshot();
});