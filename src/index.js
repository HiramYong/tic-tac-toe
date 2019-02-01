import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import { Provider } from 'react-redux';
import store from './redux/index';
import * as serviceWorker from './serviceWorker';

import Game from 'components/Game.js';
import Board from 'components/Board.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            winner: ''
        }
        this.handleWinner = this.handleWinner.bind(this);
    }

    handleWinner(val) {
        if (!val) return;
        this.setState({
            winner: val,
        })
        alert(val)
    }

    render() {
        return (
            <div className="app">
                <Game></Game>
                <Board handleWinner={this.handleWinner}></Board>
            </div>
        );
    }

}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
