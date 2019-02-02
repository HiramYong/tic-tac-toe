import { combineReducers } from 'redux';

const stateDefault = {
    squares: Array(9).fill(null),
    xIsNext: true,
}


const squaresInfo = (state = Object.assign({}, stateDefault), action) => {
    switch(action.type) {
        case 'ADDSQUARES':
            state.squares = action.squares;
            state.xIsNext = action.xIsNext;
            return state;
        case 'RESETQUARES':
            state = Object.assign({}, stateDefault);
            return state;
        default:
            return state;
    }
}

const winner = (state={}, action) => {
    switch(action.type){
        case 'SETWINNER':
            state.winner = action.winner;
            return state;
        default:
            return state;
    }
    
}

export default combineReducers({
    squaresInfo,
    winner,
})