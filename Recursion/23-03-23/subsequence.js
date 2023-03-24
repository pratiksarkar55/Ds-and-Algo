//tc - O(2^N) sc-O(N)
const subsequence = (index, input = [], output = []) => {
  if (index === input.length) {
    console.log(output);
    return;
  }
  output.push(input[index]);
  subsequence(index + 1, input, output);
  output.pop();
  subsequence(index + 1, input, output);
};
subsequence(0, [3, 1, 2], []);
