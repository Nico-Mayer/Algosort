var currLine = 0;
var rounds = 0 ;

function bubblesort(lines){
  if(sorting){
    for(var i = 0; i < getCurrRenderspeed(); i++){
      var a = lines[currLine].height;
      var b = lines[currLine+1].height;
      lines[currLine].state = 0;
      lines[currLine+1].state = 0;
      if(rounds <= lines.length){
        if(currLine < lines.length - rounds - 1){
          if(a > b){
            swap(lines, currLine, currLine+1);
          }
            currLine = currLine + 1;
        }
      }
      if(currLine == lines.length -rounds - 1){
        currLine = 0;
        rounds = rounds + 1;
      }
      if(rounds == lines.length){
        sorting = false;
        console.log("sorted");
      }
      lines[currLine].state = 2;
      lines[currLine+1].state = 2;
    }
  }
}