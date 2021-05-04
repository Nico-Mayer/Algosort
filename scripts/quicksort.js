
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
          await delaydSwap(lines, i, pivotIndex)
          lines[pivotIndex].state = 0;
          pivotIndex++;
          lines[pivotIndex].state = 1;
      }
  }
  await delaydSwap(lines, pivotIndex, end);
  return pivotIndex;
}

async function delaydSwap(arr, a, b) {
  await sleep(renderspeed);
  var temp = arr[a].height;
  arr[a].height = arr[b].height;
  arr[b].height = temp; 
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}





