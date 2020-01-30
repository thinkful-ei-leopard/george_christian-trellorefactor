import React from 'react'
import './List'
import List from './list'
import Card from './Card'
import renderer from 'react-test-renderer'
import App from './App'
import ReactDOM from 'react-dom'
import STORE from './store'

describe('suite tests', () =>{

    it('renders', () => {
        const tree = renderer.create(<List />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders without crashing', () => {
        const div = document.createElement('div');
            ReactDOM.render(
                <Card
                    cards = {
                        'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
                        'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
                    }  
                 />,
                 div
            )
        ReactDOM.render(<List />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

});