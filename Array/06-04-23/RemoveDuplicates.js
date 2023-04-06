const removeDuplicates = (input)=>{
let i = 0;

for(let j=1;j<input.length;j++){
  if(input[i]!=input[j]){
    input[i+1] = input[j];
    i++;
  }
}

return input;

}

console.log(removeDuplicates([1,2,3,3]));