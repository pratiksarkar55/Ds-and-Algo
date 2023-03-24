//tc - O(2^N) sc-O(N)
//Prints all sequence with sum K
// const subsequenceWithSumK = (index, input = [], sum, k, output) => {
//   if (index === input.length) {
//     if (sum === k) console.log(output);
//     return;
//   }
//   let newSum = sum + input[index];
//   output.push(input[index]);
//   subsequenceWithSumK(index + 1, input, newSum, k, output);
//   output.pop();
//   subsequenceWithSumK(index + 1, input, sum, k, output);
// };
// subsequenceWithSumK(0, [3, 1, 2], 0, 2, []);

//Prints first sequence
const subsequenceWithSumK = (index, input = [], sum, k, output) => {
  if (index === input.length) {
    if (sum === k) {
      console.log(output);
      return true;
    }
    return false;
  }
  let newSum = sum + input[index];
  output.push(input[index]);
  let status = false;
  status = subsequenceWithSumK(index + 1, input, newSum, k, output);
  if (status) {
    return true;
  }
  output.pop();
  status = subsequenceWithSumK(index + 1, input, sum, k, output);
  if (status) {
    return true;
  }
  return status;
};
subsequenceWithSumK(0, [3, 1, 2], 0, 5, []);
