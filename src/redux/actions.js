export const ADDSQUARES = 'ADDSQUARES';
export const SETWINNER = 'SETWINNER';

export const addSquares = (squares, xIsNext) => ({
    type: ADDSQUARES,
    squares,
    xIsNext,
});

export const setWinner = (winner) => ({
    type: SETWINNER,
    winner,
})