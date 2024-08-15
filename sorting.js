//============================================== SORTING ALGORITHM ==========================================================

//============================================== BUBBLE SORT ================================================================
//basic sorting
function bubbleSort(arr){
    let swapped 
    do{
        swapped = false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    }
    while(swapped)
        return arr
}
console.log(bubbleSort([6,7,2,9,10]));

// sort the following array of strings in alphabetical order
function bubbleSort(arr){
    let swapped 
    do{
        swapped = false
        for(let i=0; i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    }
    while(swapped)
        return arr
}
console.log(bubbleSort(['fida','manal','firzan','ibrahim']));

// sort the following array of string in length wise
function bubbleSort(arr){
    let swapped
    do{
        swapped = false
        for(let i=0; i<arr.length-1; i++){
            if(arr[i].length > arr[i+1].length){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    }
    while(swapped)
        return arr
}
console.log(bubbleSort(['fida','fathima','min','swathiviswanath','to']));



//====================================================== INSERTION SORT ============================================================================
// basic insertion sort 

function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let numberToInsert = arr[i]
        j = i-1
        while( j>=0 && arr[j]>numberToInsert){
            arr[j+1] = arr[j]
            j = j-1
        }
        arr[j+1] = numberToInsert
    }
    return arr
}
console.log(insertionSort([8,20,12,5,4]))



//==================================================== QUICK SORT =================================================================================
// basic quick sort

function quickSort(arr){
    if(arr.length<2){
        return arr
    }
    let pivot = arr[arr.length-1]
    let leftArr = []
    let rightArr = []
    for(let i=0; i<arr.length-1; i++){
        if(arr[i]<pivot){
            leftArr.push(arr[i])
        }else{
            rightArr.push(arr[i])
        }
    }
    return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
}
console.log(quickSort([4,9,7,4,2,19]));



//===================================================================== MERGE SORT ======================================================================
//basic merge sort 

function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let leftArr = arr.slice(0,mid)
    let rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}
function merge(leftArr,rightArr){
    let sortedArr = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr,...leftArr,...rightArr]
}
console.log(mergeSort([-6,20,8,-2,4]));



//===================================================================== SELECTION SORT =====================================================================
// basic selection sort

function selectionSort(arr){
    for(let i=0; i<arr.length-1; i++){
        let minIndex = i
        for(let j=i+1; j<arr.length; j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }
        }

        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}
console.log(selectionSort([5,7,3,2,8,2]));

