// LINEAR SEARCH
function linearSearch(arr,target){
    for(let i=0; i<arr.length; i++){
        if( arr[i]===target ){
            return i
        }
    }
    return -1
}
console.log(linearSearch([-5,2,10,4,6],10));
console.log(linearSearch([-5,2,10,4,6],6));
console.log(linearSearch([-5,2,10,4,6],20));

//BINARY SEARCH
function binarySearch(arr,target){
    let startInd = 0;
    let endInd = arr.length - 1;
    while( startInd<=endInd ){
        let middleInd = Math.floor((startInd+endInd)/2);
        if(target === arr[middleInd]){
            return middleInd
        }
        if( target<arr[middleInd] ){
            endInd = middleInd - 1
        }else{
            startInd = middleInd + 1
        }
    }
    return -1
}
console.log(binarySearch([-5,2,4,6,10],10));
console.log(binarySearch([-5,2,4,6,10],6));
console.log(binarySearch([-5,2,4,6,10],20));

//RECARSION of binary search

function RecursionBinary(arr,target){
    return search(arr,target,0,arr.length-1)
}
function search(arr,target,startInd,endInd){
    if(startInd>endInd){
        return -1
    }
    let middleInd = Math.floor((startInd+endInd)/2)
    if(target === arr[middleInd]){
        return middleInd
    }
    if(target<arr[middleInd]){
        return search(arr,target,startInd,middleInd-1)
    }else{
        return search(arr,target,middleInd+1,endInd)
    }
}
console.log(RecursionBinary([-5,2,4,6,10],10));
console.log(RecursionBinary([-5,2,4,6,10],6));
console.log(RecursionBinary([-5,2,4,6,10],20));


