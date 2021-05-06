function setUpBtns() {
  var playBtn = document.getElementById("playBtn");
  playBtn.onclick = function () {
    sorting = !sorting;
  };

  var restBtn = document.getElementById("resetBtn");
  restBtn.onclick = function () {
    if (!sorting) {
      resetValues();
    }
  };

  var algoTabs = document.getElementsByName("algoTabs");
  for (let i = 0; i < algoTabs.length; i++) {
    algoTabs[i].onclick = function () {
      console.log(i);
      selectedAlgo = i;
      resetValues();
    };
  }
}
