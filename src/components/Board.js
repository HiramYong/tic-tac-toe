import React, { Component } from 'react';
import Square from './Square';
import store from '../redux/index';
import {addSquares, setWinner } from '../redux/actions';

export default class Board extends Component {
  constructor() {
      super();
      this.state = {
          squares: [],
          xIsNext: true,
      };
      this.calculateWinner = this.calculateWinner.bind(this);

      store.subscribe(() => {
        this.getSquaresInfo();
      })
  }

  componentDidMount() {
      this.getSquaresInfo();
  }

//   componentWillUpdate() {
//     // this.props.handleWinner('true');
//     alert(333)
//   }


  getSquaresInfo() {
      this.setState({
        squares: store.getState().squaresInfo.squares,
        xIsNext: store.getState().squaresInfo.xIsNext,
      })
  }
  
  /**
   * 渲染棋盘子元素
   * 
   * @param {any} i 
   * @returns 
   * 
   * @memberOf Board
   */
  renderSquare(i) {
      return (
        <Square value={this.state.squares[i]}
                onClick={() => {
                    this.handleClick(i)
                }}
        ></Square> 
      )
  }

  
  /**
   * 棋盘点击
   * @memberOf Board
   */
  handleClick(i) {
    const squares = this.state.squares.concat();
    if(this.calculateWinner(squares) || squares[i]) return;
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    const xIsNext = !this.state.xIsNext;
    store.dispatch(addSquares(squares, xIsNext));
  }

  calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
  }

//   shouldComponentUpdate(nextProps,nextState){
//     const winner = this.calculateWinner(nextState.squares);
//     this.props.handleWinner(winner);
//     return true
//   } 

  render() {
    console.log('我被渲染了几次')
    const winner = this.calculateWinner(this.state.squares);
    // store.dispatch(setWinner(winner));
    // // alert(3)
    // this.props.handleWinner(winner);
    let status;

    if (winner) {
        status = `Winner is ${winner}!`
    } else {
        status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className="board">
        <span>{status}</span>
        <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
        </div>
        <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
        </div>
        <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}
