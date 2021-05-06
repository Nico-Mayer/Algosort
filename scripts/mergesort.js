async function mergesort(lines) {
  if (lines.length < 2) {
    return lines;
  } else {
    var midpoint = parseInt(lines.length / 2);
    var leftArr = lines.slice(0, midpoint);
    var rightArr = lines.slice(midpoint, lines.length);
    return await merge(await mergesort(leftArr), await mergesort(rightArr));
  }
}

async function merge(leftArr, rightArr) {
  await sleep(100);
  var sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0].height <= rightArr[0].height) {
      sortedArr.push(leftArr[0]);
      leftArr = leftArr.slice(1);
    } else {
      sortedArr.push(rightArr[0]);
      rightArr = rightArr.slice(1);
    }
  }
  while (leftArr.length) sortedArr.push(leftArr.shift());
  while (rightArr.length) sortedArr.push(rightArr.shift());
  return sortedArr;
}
