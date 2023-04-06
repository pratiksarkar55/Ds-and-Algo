const missingNumbers = (n)=>{

    let sum = (n.length*(n.length+1))/2;
    for(let i=0; i<n.length; i++){
        sum = sum-n[i];
    }

    return sum;

}

console.log(missingNumbers([9,6,4,2,3,5,7,0,1]));