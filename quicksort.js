var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
const width = 1200;
const height = 800;
const lineWidth = 2;
const lineAmount = Math.floor(width/lineWidth) - Math.floor(Math.floor(width/lineWidth) / lineWidth);
var lines = new Array(lineAmount);

var currLine = 0;
var rounds = 0;
var sorted = false;

setup();



window.requestAnimationFrame(function loop(){
    ctx.clearRect(0,0, width, height);
    
    for(var i = 0; i < lines.length; i++){
        lines[i].display();
        lines[i].color = "#000000";
    }
    
    var a = lines[currLine].height;
    var b = lines[currLine+1].height;
    lines[currLine].color = "#6fb98f";
    lines[currLine+1].color = "#6fb98f";
    
    if(rounds <= lines.length){
        if(currLine < lines.length - rounds - 1){
            if(a > b){
                swap(lines[currLine], lines[currLine+1]);
            }
            currLine = currLine + 1;
        }
    }
    if(currLine == lines.length -rounds - 1){
        currLine = 0;
        rounds = rounds + 1;
    }
    
    window.requestAnimationFrame(loop);
    
})




function setup(){
    c.style.background = "#2c7873";
    c.width = width;
    c.height = height;
    fillArray();
    //sort();
    
}
    

function fillArray(){
    // Initialisieren des Line Arrays
    for(var i = 0; i < lines.length; i++){
        lines[i] = {
            x: i*lineWidth + lineWidth/2 + i + 2,
            y: 0,
            width: lineWidth,
            height: Math.floor(Math.random() * height),
            color: "#000000",
            display: function() {
                ctx.beginPath();  
                ctx.lineWidth = this.width;
                if(i == 0){
                    this.x = (lineWidth/2) +2;
                }
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x, this.height);
                ctx.strokeStyle = this.color;   
                ctx.stroke();
                ctx.closePath();
            }
        }
    }
}

function swap(lineA, lineB){
    var temp = lineA.height;
    lineA.height = lineB.height;
    lineB.height = temp;
}

// function sort(){ 
//     var a = lines[currLine].height;
//     var b = lines[currLine+1].height
//     if(a > b){
//         var temp = a;
//         lines[currLine].height = b;
//         lines[currLine+1].height = temp;
//         console.log("round: "+ rounds +"CurrLine: "+currLine+" Swapped a: "+ a + "" + " with b: "+ b);
//     }   
// }


 function sort(){   
   for(var i = 0; i < lines.length; i++){
       for(var j = 0; j < lines.length - i - 1; j++){
            console.log(j);
            if(lines[j].height > lines[j+1].height){
                var temp = lines[j].height;
                lines[j].height = lines[j + 1].height
                lines[j+1].height = temp
            }
       }
     }
 }