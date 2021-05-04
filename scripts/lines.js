var lineWidth = getLineWidth();
var canvasWidth = document.getElementById("canvas").clientWidth;
var canvasHeight = document.getElementById("canvas").clientHeight;
var lineAmount = Math.floor(canvasWidth/lineWidth);

function createLineArray(length){
    for(var i = 0; i < length; i++){
      lines[i] = {
        height: (Math.random() * canvasHeight),
        color: "#021c1e",
        state: 0
      }
    }
    return lines;
}

function renderArray(lines) {
    if(lineWidth < 2){
        noStroke();
    }else{
        stroke("#2c7873");
    }
  for(var i = 0; i < lines.length; i++){
    if(lines[i].state == 0){
      lines[i].color = "#021c1e";
    }else if (lines[i].state == 1){
      lines[i].color = "#CD5C5C";
    }else if (lines[i].state == 2){
      lines[i].color = "#6fb98f";
    }
    fill(lines[i].color);
    rect(i * lineWidth, canvasHeight - lines[i].height, lineWidth, lines[i].height);
  }
}

function setLineWidth(width) {
    if(width >= 1){
        this.lineWidth = width;
    }
}

function resetLineAmount() {
  lineAmount = Math.floor(canvasWidth/lineWidth);
}