export const run = (currentBoard, setBoard) => {
  
  const findNeightbours = (body, y, x, list)=>{
    let countNeightbours = 0;
  
    if(body === 1){
      if(checkNeightbour(y-1,x-1,list)){
        countNeightbours++;
      }
      if(checkNeightbour(y-1,x,list)){
        countNeightbours++;
      }
      if(checkNeightbour(y-1,x+1,list)){
        countNeightbours++;
      }
      if(checkNeightbour(y,x-1,list)){
        countNeightbours++;
        if(checkCount(countNeightbours)) return false;
      }
      if(checkNeightbour(y,x+1,list)){
        countNeightbours++;
        if(checkCount(countNeightbours)) return false;
      }
      if(checkNeightbour(y+1,x-1,list)){
        countNeightbours++;
        if(checkCount(countNeightbours)) return false;
      }
      if(checkNeightbour(y+1,x,list)){
        countNeightbours++;
        if(checkCount(countNeightbours)) return false;
      }
      if(checkNeightbour(y+1,x+1,list)){
        countNeightbours++;
        if(checkCount(countNeightbours)) return false;
      }
      return countNeightbours < 2 ? false : true;
    }else{
       if(checkNeightbour((y-1),(x-1),list)){
        countNeightbours++;
      }
      
      if(checkNeightbour(y-1,x,list)){
        countNeightbours++;
      }
      if(checkNeightbour(y-1,x+1,list)){
        countNeightbours++;
      }
      if(checkNeightbour(y,x-1,list)){
        countNeightbours++;
      }
      if(checkNeightbour(y,x+1,list)){
        countNeightbours++;
      }
      if(checkNeightbour(y+1,x-1,list)){
        countNeightbours++;
      }
      if(checkNeightbour(y+1,x,list)){
        countNeightbours++;
      }
      if(checkNeightbour(y+1,x+1,list)){
        countNeightbours++;
      }
      if(countNeightbours === 3)return true;
      return false;
    }
  }
setBoard(currentBoard.map((i, index1, list) =>
      i.map((j, index2) => {
        if(j === 1)
          if(!findNeightbours(j, index1, index2, list))
            return 0;
        
        if(j === 0)
          if(findNeightbours(j, index1, index2, list))
            return 1;
        return j;
      })
    )
  );
}
const checkCount = (countNeightbours) => {
  if(countNeightbours === 4) return true;
  return false;
}
    
const checkNeightbour = (y, x, list) => {
  try{
    if(!list[y][x]) return false;
  }catch(e){
    return false;
  }
  return true;
}