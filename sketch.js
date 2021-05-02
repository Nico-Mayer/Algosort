const width = 1200;
const height = 800;
var lineWidth = 8;
var lines = [];
var sorting = false;

var currLine = 0;
var rounds = 0 ;
var renderspeed = 5;
var lineAmount;
var canvas;


function setup() {
  canvas = createCanvas(width, height);
  canvas.parent("canvas");
  lineAmount = floor(width/lineWidth);
  lines = new Array(lineAmount);
  setUpSliders();
  setUpBtns();
  fillArray();
}

function draw() {
  background("#2c7873");
  bubblesort();
  renderArray();
}

function renderArray() {
  stroke("#2c7873");
  for(var i = 0; i < lines.length; i++){
    fill(lines[i].color);
    rect(i * lineWidth, height - lines[i].height, lineWidth, lines[i].height);
  }
}

function fillArray(){
  for(var i = 0; i < lines.length; i++){
    lines[i] = {
      height: random(height),
      color: "#021c1e",
      highlight: function(on) {
        if(on){
          this.color = "#6fb98f";
        }else{
          this.color = "#021c1e";
        }
      }
    }
  }
}

function bubblesort(){
  if(sorting){
    for(var i = 0; i < renderspeed; i++){
      var a = lines[currLine].height;
      var b = lines[currLine+1].height;
      lines[currLine].highlight(false);
      lines[currLine+1].highlight(false);
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
      lines[currLine].highlight(true);
      lines[currLine+1].highlight(true);
    }
  }
}

function swap(arr, a, b) {
  var temp = arr[a].height;
  arr[a].height = arr[b].height;
  arr[b].height = temp; 
}

function resetValues() {
  lineAmount = floor(width/lineWidth);
  lines = [];
  lines = new Array(lineAmount);
  currLine = 0;
  rounds = 0;
}

function setUpSliders(){
  var slider = document.getElementById("lineAmountSlider");
  var speedSlider = document.getElementById("speedSlider");
  speedSlider.oninput = function() {
    renderspeed = speedSlider.value;
  }
  slider.oninput = function() {
    if(lineWidth >= 2){
        lineWidth = Math.floor(this.value);
    }
    resetValues();
    fillArray();
    renderArray();
  }
}

function setUpBtns() {
  var playBtn = document.getElementById("playBtn");
  playBtn.onclick = function() {
    sorting = !sorting;
  }
  var restBtn = document.getElementById("resetBtn");
  restBtn.onclick = function() {
    if(!sorting){
      resetValues();
      fillArray();
      renderArray();
    }
  }
}