import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import store from '../redux/index';
import {resetSquares} from '../redux/actions';


const styles = (theme) => ({
  card: {
    minWidth: 100,
  },
  button: {
    margin:  '10px 0',
  }
})

class Game extends Component {
  constructor() {
    super();
    this.handleRestart = this.handleRestart.bind(this);
  }

  handleRestart() {
    store.dispatch(resetSquares());
  }
  
  render() {
    const { classes } = this.props;
    return (
      <div className="game">
        <h1 className="title">Tic-Tac-Toe</h1>
        <Card className={classes.card}>
          <CardContent>
            <h2>
              Game Rules
            </h2>
            The winner is the first one who conect the three points into a line<br></br>
            <Button variant="contained" color="secondary" className={classes.button}
                    onClick={() => {this.handleRestart()}}
            >
              Go
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }
}

Game.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Game);
