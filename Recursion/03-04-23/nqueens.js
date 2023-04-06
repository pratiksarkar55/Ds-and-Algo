const nqueens = (col,board,ans=[],leftMap=[],upperDiagonalMap=[],lowerDiagonalMap=[],n)=>{
  // console.log("Reaching here",col,'\t'); 
    if(col === n){
        console.log("Reaching here");
        ans.push(board);
        return ans;
      }
    for(var i=0;i<n;i++){
          // console.log("okayy",leftMap[i]!=1,lowerDiagonalMap[i+col!=1],upperDiagonalMap[(n-1)+(col+i)],'\t'); 
        if(leftMap[i]!=1 && lowerDiagonalMap[i+col]!=1 && upperDiagonalMap[(n-1)+(col+i)]!=1){
     //   console.log("okayy!!!",col);
        board[i][col] = 1;
        leftMap[i] =1;
        lowerDiagonalMap[i+col] =1;
        upperDiagonalMap[(n-1)+(col+i)] = 1;
        nqueens(col+1,board,ans,leftMap,upperDiagonalMap,lowerDiagonalMap,n);
        board[i][col] = null;
        leftMap[i] =null;
        lowerDiagonalMap[i+col] =null;
        upperDiagonalMap[(n-1)+(col+i)] = null;
        }
    }
  return ans;
}
let n = 4;
let arr = new Array(n);
let arr1 = [];
for(let i=0;i<n;i++){
arr1.push(arr);
}
console.log(nqueens(0,arr1,[],new Array(n),new Array(2*n-1),new Array(2*n-1),n));