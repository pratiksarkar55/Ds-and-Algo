const combinationSumII = (input, target, output = [], index, answerSet) => {
  console.log(
    'output is ',
    output,
    ' and index is ',
    index,
    ' and target is ',
    target
  );
  if (index === input.length || target < 0) {
    if (target === 0) {
      answerSet.add([...output]);
      return answerSet;
    }
    return answerSet;
  }
  output.push(input[index]);
  combinationSumII(input, target - input[index], output, index + 1, answerSet);
  output.pop();
  combinationSumII(input, target, output, index + 1, answerSet);
  return answerSet;
};

console.log(combinationSumII([1, 1, 1, 2, 2], 4, [], 0, new Set()));
