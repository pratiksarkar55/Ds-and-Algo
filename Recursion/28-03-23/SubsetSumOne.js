//tc-O(2^N)+2^N(LOG(2^N)) sc-O(2^N) where 2^N is length of answer
const subsetSum1 = (index, input = [],sum,answer=[]) => {
  if (index === input.length) {
    answer.push(sum)
    return answer;
  }
  subsetSum1(index+1,input,input[index]+sum,answer);
  subsetSum1(index+1,input,sum,answer);
  return answer;
};
console.log(subsetSum1(0, [5,2,1],0,[]).sort()); // 1,2,5