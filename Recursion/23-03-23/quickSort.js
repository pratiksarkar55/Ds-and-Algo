const quickSortSort = (input, low, high) => {
  if (low < high) {
    const pivotIndex = getPivotIndex(input, low, high);
    quickSortSort(input, low, pivotIndex - 1);
    quickSortSort(input, pivotIndex + 1, high);
    return input;
  } else {
    return input;
  }
};

const getPivotIndex = (input, low, high) => {
  let pivotIndex = low;
  let i = low;
  let j = high;
  while (i < j) {
    while (input[i] <= input[pivotIndex] && i < high) {
      i++;
    }

    while (input[j] > input[pivotIndex] && j > low) {
      j--;
    }
    if (i < j) {
      let temp = input[i];
      input[i] = input[j];
      input[j] = temp;
    }
  }
  let temp = input[pivotIndex];
  input[pivotIndex] = input[j];
  input[j] = temp;
  return j;
};

let arr = [3, 2, 8, 5, 1, 4, 23, 10];
console.log(quickSortSort(arr, 0, arr.length - 1));
