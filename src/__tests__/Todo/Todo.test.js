import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Todo from '../../components/Todo/Todo';
import Adapter from 'enzyme-adapter-react-15'
import toJson from 'enzyme-to-json'
import moment from 'moment'


/*describe('About component', () => {
  it('', () => {

  })
});*/

Enzyme.configure({ adapter: new Adapter() });

test('Todo component should render as expected', () => {
  const todo = {date: moment()};
  const component = shallow(<Todo todo={todo}/>);
  const tree = toJson(component);
  console.log(tree);
  expect(tree).toMatchSnapshot();
});

