import React from 'react';
import Notes from '../../components/Notes/Notes';
import { mount } from 'enzyme';

describe("Note", () => {
    let props;
    let mountedNote;
    const note = () => {
        if (!mountedNote) {
            mountedNote = mount(
                <Notes {...props} />
            );
        }
        return mountedNote;
    }

    beforeEach(() => {
        props = {
            note: undefined,
            onButtonSaveClick: undefined,

        };
        mountedNote = undefined;
    });

    it("always renders a div", () => {
        const divs = note().find("div");
        expect(divs.length).toBeGreaterThan(0);
    });

    describe("the rendered div", () => {
        it("contains everything else that gets rendered", () => {
            const divs = lockScreen().find("div");
            // When using .find, enzyme arranges the nodes in order such
            // that the outermost node is first in the list. So we can
            // use .first() to get the outermost div.
            const wrappingDiv = divs.first();

            // Enzyme omits the outermost node when using the .children()
            // method on note(). This is annoying, but we can use it
            // to verify that wrappingDiv contains everything else this
            // component renders.
            expect(wrappingDiv.children()).toEqual(note().children());
        });
    });

    it("always renders a `DeleteModal`", () => {
        expect(note().find(DeleteModal).length).toBe(1);
    });

    it("always renders a `Button`", () => {
        expect(note().find(Button).length).toBe(1);
    });

    it("always renders a `ViewNoteModal`", () => {
        expect(note().find(ViewNoteModal).length).toBe(1);
    });

    it("always renders a `EditNoteModal`", () => {
        expect(note().find(EditNoteModal).length).toBe(1);
    });

    describe("when `onButtonSaveClick` is defined", () => {
        beforeEach(() => {
            props.onButtonSaveClick = jest.fn();
        });

        it("sets the rendered `onButtonSaveClick`'s `onButtonSaveClick` prop to the same value as `onButtonSaveClick`", () => {
            const editNoteModal = note().find(onButtonSaveClick);
            expect(editNoteModal.props().onButtonSaveClick).toBe(props.onButtonSaveClick);
        });
    });

    describe("when `onButtonSaveClick` is undefined", () => {
        beforeEach(() => {
            props.onButtonSaveClick = undefined;
        });

        it("sets the rendered `EditNoteModal`'s `onButtonSaveClick` prop to undefined'", () => {
            const editNoteModal = note().find(EditNoteModal);
            expect(editNoteModal.props().onButtonSaveClick).not.toBeDefined();
        });
    });
});
