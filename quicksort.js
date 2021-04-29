var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
const width = 1200;
const height = 800;
const lineWidth = 3;
const lineAmount = Math.floor(width/lineWidth) - Math.floor(Math.floor(width/lineWidth) / lineWidth);
var values = new Array(lineAmount);
var currLine = 0;


setup();


window.requestAnimationFrame(function loop(){
    if(currLine < lineAmount){
    drawLine();
    currLine = currLine + 1;
    }
    window.requestAnimationFrame(loop);
})




function setup(){
    c.style.background = "#ff8";
    c.width = width;
    c.height = height;
    fillValuesArray();
    sort();
    
}


function fillValuesArray(){
    for(i = 0; i < values.length; i++){
        values[i] = Math.floor(Math.random() * height);
    }
    console.log(values.length);
    console.log(values)
}

function drawLine(){
        ctx.beginPath();       
        ctx.lineWidth = lineWidth;
        if(currLine == 0){
            ctx.moveTo((lineWidth/2) +2, 0); 
            ctx.lineTo((lineWidth/2) +2, values[currLine]); 
        }
        ctx.moveTo(currLine*lineWidth + lineWidth/2 + currLine + 2, 0);
        ctx.lineTo(currLine*lineWidth + lineWidth/2 + currLine + 2, values[currLine]);
        ctx.stroke();
    
    console.log(values);
}

function sort(){   
    for(var i = 0; i < values.length; i++){
      for(var j = 0; j < ( values.length - i -1 ); j++){
        if(values[j] > values[j+1]){
          var temp = values[j]
          values[j] = values[j + 1]
          values[j+1] = temp
        }
      }
    }
}