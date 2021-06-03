export const makeBoard = (num)=>{
  let board = [];
    for(let i = 0; i < 30; i++){
      board.push([]);
      for(let j = 0; j < 50; j++){
        board[i].push(num === -1 ? Math.random() < 0.5 ? 0 : 1 : num);
      }
    }
  return board;
}