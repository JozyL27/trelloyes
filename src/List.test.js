import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import List from './List';



describe('<List />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        // Pass required props in the usual way
        ReactDOM.render(
            <List 
            header="Joe"
            cards={[{id: 89, title: "shoe", content: "nike"}, {id: 69, title: "shoes", content: "adidas"}]}
            />, div
        );

        ReactDOM.unmountComponentAtNode(div);
    });
});


describe('<List />', () => {
    it('renders ui as expected', () => {
        const tree = renderer.create(
            <List 
            header="joe"
            cards={[{id: 89, title: "shoe", content: "nike"}, {id: 69, title: "shoes", content: "adidas"}]}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
})

// header = h2 = string
// cards = array = array of objects