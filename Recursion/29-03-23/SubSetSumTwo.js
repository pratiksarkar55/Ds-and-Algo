//tc-O(2^N)+2^N(LOG(2^N)) sc-O(2^N) where 2^N is length of answer
const subsetSum2 = (index, input = [],output,answer=[]) => {
    if(index=== 0)     
  answer.push([]);
  console.log(`index is ${index} ,output is ${output}, answer is ${answer}`);
    if (index === input.length) {
      return answer;
  }
  for(let i = index;i<input.length;i++){
    if(i>index &&input[i]=== input[i-1])
      continue;

   output.push(input[i]);
   answer.push([...output]);
   subsetSum2(i+1, input,output,answer);
   output.pop();
  }
  return answer;
};
console.log(subsetSum2(0, [4,4,4,1,4].sort((a,b)=>a-b),[],[])); // 1,2,2