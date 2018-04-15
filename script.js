minSum([5,4,2,3])//22
minSum([12,6,10,26,3,24])//342
minSum([9,2,8,7,5,4,0,6])//74

function minSum(arr) {
  sum=0
    let sortArr=arr.sort(function(a,b){
      return b-a;
    })
    console.log(sortArr);
      for (let i=0; i<sortArr.length/2; i++){
        sum=sum+sortArr[i]*sortArr[sortArr.length-i-1]
      }
  console.log(sum);
}
