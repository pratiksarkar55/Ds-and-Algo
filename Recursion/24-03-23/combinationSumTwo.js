//TC - O(2^N)*O(K) SC-O(X)*O(K) where k is avg length of output and x is length of answer.
const combinationSumII = (input, target, output = [], index,answer) => {
    if (target === 0) {
      answer.push([...output]);
      return answer;
  }
  for(let i = index;i<input.length;i++){
    if(i>index &&input[i]=== input[i-1])
      continue;
    if(target<0){
      break;
    }  
   output.push(input[i]);
   combinationSumII(input,target-input[i],output,i+1,answer);
   output.pop();
  }
  return answer;
};

console.log(combinationSumII([10,1,2,7,6,1,5].sort((a,b)=>a-b), 8, [], 0,[]));//1,1,2,5,6,7,10
