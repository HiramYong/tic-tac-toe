import React, { Component } from 'react';
import Game from 'components/Game.js';
import Board from 'components/Board.js';

export default class App extends Component {
  constructor() {
      super();
      this.state = {
          winner: '',
      }
      this.handleWinner = this.handleWinner.bind(this);
  }
  handleWinner(val) {
    if (!val) return;
    this.setState({
        winner: val,
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.winner === this.state.winner) return false;
    return true;
  }

  render() {
    return (
        <div className="app">
            <Game></Game>
            <Board ref={this.boardRef} onVal={this.handleWinner}></Board>
        </div>
    )
  }
}
