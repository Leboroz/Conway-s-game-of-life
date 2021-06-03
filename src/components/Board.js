import React, {useState} from 'react';



export const Board = ({board}) => {
  const [mouseDown, setMouseDown] = useState(false);
  const [boardn, setBoardn] = board;

  const handleDown = (e) => {
      let newBoard = [...boardn];
    const x = e.target.id.split(',')[0];
    const y = e.target.id.split(',')[1];
    newBoard[x][y]= newBoard[x][y] === 0 ? 1:0;
    setBoardn(newBoard);
    setMouseDown(true);
  }
  const handleEnter = (e) => {
    if(mouseDown)
      handleDown(e);
  }
  const handleUp = (e) => {
    setMouseDown(false);
  }
  return (<div className="wrapper">
    <div className="board">
    {
    boardn
      .map(
        (i, index1) => i.map(
            (j, index2) => <div
                id={[index1, index2]}
                style={color(j)}
                onMouseDown={handleDown}
                onMouseEnter={handleEnter}
                style={{animationName: j === 1 ? "deadOrAlive":"none"}}
                onMouseUp={handleUp}
                key={index1+""+index2}
                className="body"
            ></div>
        )
      )
    }
    </div>
  </div>)
}
const alive = "#114e60";
const dead = "#fff5fd";
const color = (num) =>  { return{backgroundColor: num === 0 ? dead : alive}}
export default Board;