import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Todo from './Todo';
import Adapter from 'enzyme-adapter-react-15'
import moment from 'moment'


/*describe('About component', () => {
  it('', () => {

  })
});*/

Enzyme.configure({ adapter: new Adapter() });

test('Todo component should render as expected', () => {
  const todo = {date: moment()}
  const component = shallow(<Todo todo={todo}/>);
  console.log(component)
});

