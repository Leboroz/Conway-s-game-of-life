import React, { useState, useEffect, useRef } from 'react';
import { run } from "../functions/run";
import { makeBoard } from "../functions/makeBoard";
import Popup from './Popup';
import { patterns } from "../functions/patterns";
import {useInterval} from "../functions/useInterval";

export const Menu = ({ board }) => {
  
  let [currentBoard, setBoard] = board
  let [counter, setCounter] = useState(0);
  let [delay, setDelay] = useState(300);
  let [running, setRun] = useState(true);
  // const speeds = [ 1000, 500, 100 ];

  const handleClickPattern = (e) => {

    if(e.target.id === "glider_Gun_And_Pulsars"){
      setBoard(patterns[e.target.id]);
      return;
    }
    let patternsBoard = makeBoard(0);
    patterns[e.target.id].forEach(i => {
      patternsBoard[i[0]][i[1]] = 1;
    });
    setBoard(patternsBoard);
    setDelay(300);
    setCounter(0);
  }

  const handleClickMenu = (e) => {
    switch(e.target.id){
      case "Start/Stop":
        setDelay(running ? null : 300);
        setRun(!running);
        break;
      case "Randomize":
        setCounter(0);
        setBoard(makeBoard(-1));
        break;
      case "Clear Board":
        setBoard(makeBoard(0));
        setCounter(0);
        setDelay(null);
        setRun(false);
        break;
      default:
        alert("no option was selected");
    }
  }

  const patternsButtons = Object
    .keys(patterns)
    .map(
      (i) => 
        <div 
        id={i}
        className="menuButton" 
        onClick={handleClickPattern}
        key={i}>
          {i.replaceAll('_', ' ').toLowerCase()}
        </div>
    );

  const rules = (
    <>
      <h3>Rules</h3>
        <ul>
            <li>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
            <li>Any live cell with two or three live neighbours lives on to the next generation.</li>
            <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
            <li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
        </ul>
    </>
  )
  
  useInterval(() => {
    run(currentBoard,setBoard);
    setCounter(counter + 1);
  }, delay);
  
  
  
  return (
    <div className="wrapper">
      <div className="counter-label">
        <p>Generations</p> 
        <span className="counter">{counter}</span>
      </div>
      <div>
      </div>
      {["Start/Stop", "Randomize", "Clear Board"]
      .map(i => <div id={i} className="menuButton" onClick={handleClickMenu} key={i}>{i}</div>)}
      <Popup id="Rules" className="menuButton" body={rules}/>
      <Popup id="Patterns" className="menuButton" body={patternsButtons}/>
    </div>
  )
}
export default  Menu;