//TC - O(2^T)*k where k is avg length of output and T is avg combination for each index. SC- O(T*k)
const combinationSumI = (input, target, output = [], index, answer) => {
  //Ei if condition ta besh important
  if (index === input.length || target < 0) {
    if (target === 0) {
      answer.push([...output]);
      return answer;
    }
    return answer;
  }
  output.push(input[index]);
  combinationSumI(input, target - input[index], output, index, answer);
  output.pop();
  combinationSumI(input, target, output, index + 1, answer);
  return answer;
};

combinationSumI([10, 1, 2, 7, 6, 1, 5], 8, [], 0, []);
