var lineAmountSlider = document.getElementById("lineAmountSlider");
var speedSlider = document.getElementById("speedSlider");
var renderspeed = speedSlider.value;

function setUpSliders(){
    lineAmountSlider = document.getElementById("lineAmountSlider");
    speedSlider = document.getElementById("speedSlider");
    speedSlider.oninput = function() {
      renderspeed = speedSlider.value;
    }
    lineAmountSlider.oninput = function() {
      setLineWidth(this.value);
      resetValues();
    }
}

function getCurrRenderspeed(){
  return this.renderspeed;
}

function getLineWidth(){
  return lineAmountSlider.value;
}