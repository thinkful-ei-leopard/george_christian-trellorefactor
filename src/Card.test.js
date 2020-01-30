import React from 'react'
import Card from './Card'
import renderer from 'react-test-renderer'
import App from './App'
import ReactDOM from 'react-dom'

describe('suite tests', () =>{

    it('renders', () => {
        const tree = renderer.create(<Card />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

});


