import React,{ useState } from 'react';
import ReactDom from 'react-dom'; 
import Board from "./components/Board"
import Menu from "./components/Menu"
import { makeBoard } from './functions/makeBoard';

import "./view/index.css";



const App = () => {
  const [board, setBoard] = useState(makeBoard(-1));
  return (
  <div>
    <h1 id="Title">Conway's Game of Life</h1>
    <div className="flex">
      <Board board={[board, setBoard]}/>
      <Menu board={[board, setBoard]}/>
    </div>
  </div>);
}

ReactDom.render(<App/>, document.getElementById('root'));