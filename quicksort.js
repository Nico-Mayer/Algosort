const width = 1200;
const height = 800;
var lineWidth = 54;
var lines = [];
var sorting = false;
var renderspeed = 5;
var lineAmount;
var canvas;
var sorted = 0;


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
  if(sorting ){
    quicksort(lines,0, lines.length -1);
    sorting = false;
  }
  renderArray();
}

function renderArray() {
  if(lineWidth < 2){
    noStroke();
  }else{
    stroke("#2c7873");
  }
  for(var i = 0; i < lines.length; i++){
    if(lines[i].state == 1){
      lines[i].color = "#CD5C5C";
    }else if (lines[i].state == 0){
      lines[i].color = "#021c1e";
    }else if (lines[i].state == 2){
      lines[i].color = "#6fb98f";
    }
    fill(lines[i].color);
    rect(i * lineWidth, height - lines[i].height, lineWidth, lines[i].height);
  }
}

function fillArray(){
  for(var i = 0; i < lines.length; i++){
    lines[i] = {
      height: random(height),
      state: 0,
      color: "#021c1e"
    }
  }
}

async function quicksort(lines, start, end){
      if(start >= end){
          return;
      }
      var index = await partition(lines, start, end);
      lines[index].state = 0;
      await Promise.all([
        quicksort(lines, start, index -1),
        quicksort(lines, index+1, end)
      ]);
      
}

async function partition(lines, start, end){
  var pivotIndex = start;
  var pivotValue = lines[end].height;
  for(var i = start; i < end; i++){
    lines[i].state = 2;
  }
  lines[pivotIndex].state = 1;
  for(var i = start; i < end; i++){
      if(lines[i].height < pivotValue){
          await swap(lines, i, pivotIndex)
          lines[pivotIndex].state = 0;
          pivotIndex++;
          lines[pivotIndex].state = 1;
      }
  }
  await swap(lines, pivotIndex, end);
  return pivotIndex;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function swap(arr, a, b) {
  await sleep(renderspeed);
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
  sorted = 0;
}

function setUpSliders(){
  var slider = document.getElementById("lineAmountSlider");
  var speedSlider = document.getElementById("speedSlider");
  speedSlider.oninput = function() {
    renderspeed = 301-speedSlider.value;
    console.log(renderspeed);
  }
  slider.oninput = function() {
    lineWidth = Math.floor(this.value);
    resetValues();
    fillArray();
    renderArray();
  }
}

function setUpBtns() {
  var playBtn = document.getElementById("playBtn");
  playBtn.onclick = function() {
    if(sorted == 0){
      sorting = !sorting;
      sorted++;
    }
      
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