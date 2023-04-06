const palindromePartition = (input="",index,ans,output)=>{
    if(index=== input.length){
        output.push([...ans]);
        return output;
    }
   for(let i=index;i<input.length;++i){
      if(isPalindrome(input,index,i)){
         ans.push(input.substring(index,i+1));
         palindromePartition(input,i+1,ans,output);
         ans.pop();
      }
   }
   return output;
}

isPalindrome=(input,index,i)=>{
    let str1 = input.substring(index,i+1);
    let str2="";
    for(let j=str1.length-1;j>=0;j--){
        str2= str2+str1[j]
    };

    return str1===str2;
}

console.log(palindromePartition("aabb",0,[],[]));