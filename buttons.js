function setUpBtns() {
    var playBtn = document.getElementById("playBtn");
    playBtn.onclick = function() {
      sorting = !sorting;
    }
    var restBtn = document.getElementById("resetBtn");
    restBtn.onclick = function() {
      if(!sorting){
        resetValues();
      }
    }
  }  