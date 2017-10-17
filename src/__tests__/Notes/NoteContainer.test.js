import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import toJson from 'enzyme-to-json'

import NoteContainer from '../../components/Notes/NoteContainer';

require("jest-localstorage-mock");


Enzyme.configure({ adapter: new Adapter() });


test('NoteContainer component should render as expected: ', () => {
  const component = shallow(<NoteContainer />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

describe('noteContainer', () => {
    let props;
    let mountedNoteContainer;
    const noteContainer = () => {
        if (!mountedNoteContainer) {
            mountedNoteContainer = mount(
                <NoteContainer {...props} />
            );
        }
        return mountedNoteContainer;

    };
    
    beforeEach(() => {
        props = {
            
            
        };
        mountedNoteContainer = undefined;
    });

    it("always renders a div", () => {
        const divs = noteContainer().find("div");
        expect(divs.length).toBeGreaterThan(0);
    });

    describe("the rendered div", () => {
        it("contains everything else that gets rendered", () => {
            const divs = noteContainer().find("div");
            // When using .find, enzyme arranges the nodes in order such
            // that the outermost node is first in the list. So we can
            // use .first() to get the outermost div.
            const wrappingDiv = divs.first();

            // Enzyme omits the outermost node when using the .children()
            // method on note(). This is annoying, but we can use it
            // to verify that wrappingDiv contains everything else this
            // component renders.
            expect(wrappingDiv.children()).toEqual(noteContainer().children());
        });
    });

    test('test a test'), () =>{
        expect(true).toBe(true);
    }

    it("always renders a `Note`", () => {
        expect(note().find(Note).length).toBe(1);
    });


});