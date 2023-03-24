//tc - O(N log N ) and sc - O(N)

const mergeSort = (n, inputList = []) => {
  if (inputList.length <= 1) {
    return inputList;
  }
  let low = 0;
  let high = inputList.length;
  let mid = Math.floor(inputList.length / 2);
  let leftInput = inputList.slice(low, mid);
  let rightInput = inputList.slice(mid, high);
  let leftArray = mergeSort(n, leftInput);
  let rightArray = mergeSort(n, rightInput);
  return sortArray(leftArray, rightArray, inputList);
};

const sortArray = (leftArray, rightArray, inputList) => {
  let low = 0;
  let high = inputList.length;
  let outputArray = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] <= rightArray[rightIndex]) {
      outputArray.push(leftArray[leftIndex]);
      leftIndex++;
    } else if (leftArray[leftIndex] >= rightArray[rightIndex]) {
      outputArray.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < leftArray.length) {
    outputArray.push(leftArray[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < rightArray.length) {
    outputArray.push(rightArray[rightIndex]);
    rightIndex++;
  }
  for (let i = low; i < high; i++) {
    inputList[i] = outputArray[i];
  }
  return inputList;
};

console.log(mergeSort(8, [3, 2, 8, 5, 1, 4, 23, 10]));
