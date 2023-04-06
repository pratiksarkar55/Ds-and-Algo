//TC - O(n^2) - n for while loop and n for splice   SC-O(n).
const kSequence = (n,k)=>{
    let arr = [];
    let ans = "";
    let fact = 1;
    for(let i = 1; i < n; i++){
          arr.push(i);
          fact= fact*i;
   }
   arr.push(n);
   k=k-1;
   while(arr.length!==0){
     ans =ans+(arr[parseInt(k/fact)]).toString();
     arr.splice(k/fact,1);
     k = k%fact;
     fact = arr.length!==0?fact/arr.length:fact;
   }
  return ans;
}

console.log(kSequence(4,17));