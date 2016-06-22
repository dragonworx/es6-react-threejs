import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        // set default state
        this.state = {
            title: 'ES6/React/Three.JS Starter Project'
        };
    }
    render () {
        // wrap tags in brackets to avoid blank return statement if you want to format nicely across multiple lines
        return (
            <h1>{this.state.title}
                <canvas id="gfx-canvas"></canvas>
            </h1>
        );
    }
}

export default App;