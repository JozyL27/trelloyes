import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Card from './Card';

describe('<Card />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        // Pass required props in the usual way
        ReactDOM.render(
            <Card
            title="Joe"
            content="hey joe"
            />,
            div
        );

        ReactDOM.unmountComponentAtNode(div);
    });

    // it('renders this UI as expected', () => {
    //     // Render the component, as JSON
    //     const tree = renderer.create(<Card
    //         title="joe"
    //         content="hey joe"
    //         />).toJSON();
    //     // Check whether it matches the previous snapshot
    //     // Stored in __snapshots__/App.test.js.snap
    //     expect(tree).toMatchSnapshot(); 
    // });
});

describe('<Card />', () => {
    it('renders this UI as expected', () => {
        // Render the component, as JSON
        const tree = renderer.create(<Card
            title="joe"
            content="hey joe">
            </Card>).toJSON();
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__/App.test.js.snap
        expect(tree).toMatchSnapshot(); 
    });
});