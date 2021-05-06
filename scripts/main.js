var canvas;
const width = canvasWidth;
const height = canvasHeight;
var lines = [];
var sorting = false;
var test = 0;
var selectedAlgo = 0;

var testArr = [40, 100, 1, 5, 25, 10];

function setup() {
  loadScript("bubblesort.js");
  canvas = createCanvas(width, height);
  canvas.parent("canvas");
  lines = createLineArray(lineAmount);
  setUpSliders();
  setUpBtns();
}

function draw() {
  background("#2c7873");
  if (sorting) {
    bubblesort(lines);
  }
  if (selectedAlgo == 1 && sorting) {
    quicksort(lines, 0, lines.length - 1);
    sorting = false;
  }
  renderArray(lines);
}

function resetValues() {
  resetLineAmount();
  lines = [];
  lines = createLineArray(lineAmount);
  currLine = 0;
  rounds = 0;
}

function swap(arr, a, b) {
  var temp = arr[a].height;
  arr[a].height = arr[b].height;
  arr[b].height = temp;
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function loadScript(inputScript) {
  import("./bubblesort.js");
}
