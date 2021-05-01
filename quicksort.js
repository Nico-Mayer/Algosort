var c = document.getElementById("canvas");
var sort = false;
var slider = document.getElementById("lineAmountSlider");
var output = document.getElementById("value");
var playBtn = document.getElementById("playBtn");
playBtn.onclick = function() {
    sort = !sort;
}

var ctx = c.getContext("2d");
const width = 1200;
const height = 800;
var lineWidth = 90;
const gap = 1;
var lineAmount = Math.floor((width-(gap*4))/(lineWidth+gap));
var lines = new Array(lineAmount);

var currLine = 0;
var rounds = 0;


setup();

output.innerHTML = lineAmount;
slider.oninput = function() {
    ctx.clearRect(0,0, width, height);
    if(lineWidth >= 2){
        lineWidth = Math.floor(this.value);
    }

    resetValues();
    fillArray();
    renderArray();
    output.innerHTML = lineAmount;

}




window.requestAnimationFrame(function loop(){
    if(sort){
        ctx.clearRect(0,0, width, height);
        renderArray();
    
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
        if(rounds == lines.length){
            sort = false;
            renderArray();
            console.log("sorted");
        }
    }
    window.requestAnimationFrame(loop);
})





function setup(){
    lineAmount = Math.floor((width-(gap*4))/(lineWidth+gap));
    c.style.background = "#2c7873";
    c.width = width;
    c.height = height;
    fillArray();
    renderArray();
    
}

function renderArray() {
    for(var i = 0; i < lines.length; i++){
        lines[i].display();
        lines[i].color = "#000000";
    }
}

function resetValues() {
    lineAmount = Math.floor((width-(gap*4))/(lineWidth+gap));
    lines = [];
    lines = new Array(lineAmount);
    currLine = 0;
    rounds = 0;
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





/*  function sort(){   
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
 } */