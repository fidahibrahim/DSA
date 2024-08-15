/*
//=================================================== MAX HEAP ===================================================================================================
// ANY NODE VALUE <= PARENT VALUE >= CHILD VALUE
// MAX VALUE WILL BE AT THE ROOT 
// 

class Heap{
    constructor(){
        this.heap = []
    }
    getParentIndex(i){
        return Math.floor((i-1)/2)
    }
    getLeftChild(i){
        return 2*i + 1
    }
    getRightIndex(i){
        return 2*i + 2
    }
    swap(i1,i2){
        let temp = this.heap[i1]
        this.heap[i1] = this.heap[i2]
        this.heap[i2] = temp
    }
    
    insert(value){
        this.heap[this.heap.length] = value                         //insert new ele at the end 
        return this.heapifyUp()                                    
    }
    heapifyUp(){
        let currInd = this.heap.length - 1
        while(this.heap[currInd] > this.heap[this.getParentIndex(currInd)]){     //recursively compare the value with its parent
            this.swap(currInd,this.getParentIndex(currInd))
            currInd = this.getParentIndex(currInd)
        }
    }
    extractMax(){  
        if(this.heap.length === 0){
            return null
        }
        if(this.heap.length === 1){
            return this.heap.pop()
        }
        let max = this.heap[0]                                   //for extracting max(root) value  //remove(pop) the top element //move last one to the top //heaapify down
        this.heap[0] = this.heap[this.heap.length - 1]
        this.heap.length-- 
        this.heapifyDown()
        return max
    }
    heapifyDown(){
        let currInd = 0
        while(this.heap[this.getLeftChild(currInd)] !== undefined){
            let bigChildInd = this.getLeftChild(currInd)

            if( this.heap[this.getRightIndex(currInd)] !== undefined
            &&  this.heap[this.getRightIndex(currInd)] > this.heap[this.getLeftChild(currInd)]){
                bigChildInd = this.getRightIndex(currInd)
            }

            if(this.heap[currInd] < this.heap[bigChildInd]){
                this.swap(currInd,bigChildInd)
                currInd = bigChildInd
            }else{
                return
            }
        }
    }
    peek(){
        return this.heap[0]
    }
}

const heap = new Heap()
heap.insert(90)
heap.insert(44)
heap.insert(70)
heap.insert(40)
heap.insert(25)
heap.insert(5)
console.log(heap.peek());
let arr = []
arr.push(heap.extractMax())
arr.push(heap.extractMax())
arr.push(heap.extractMax())
arr.push(heap.extractMax())
arr.push(heap.extractMax())
arr.push(heap.extractMax())
console.log(arr);
*/



//====================================================== MIN HEAP =================================================================================
//PARENT VALUE <= ANY NODE <= CHILD VALUE
//MIN VALUE AT THE ROOT

class Heap{
    constructor(){
        this.heap = []
    }
    getParentInd(i){
        return Math.floor((i-1)/2)
    }
    getLeftChildInd(i){
        return 2*i + 1
    }
    getRightChildInd(i){
        return 2*i + 2
    }
    swap(i1,i2){
        let temp = this.heap[i1]
        this.heap[i1] = this.heap[i2]
        this.heap[i2] = temp
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }
    heapifyUp(){
        let currInd = this.heap.length - 1
        while(this.heap[currInd] < this.heap[this.getParentInd(currInd)] ){
            this.swap(currInd,this.getParentInd(currInd))
            currInd = this.getParentInd(currInd)
        }
    }
    peek(){
        return this.heap[0]
    }
    extractMin(){
        if(this.heap.length === 0){
            return null
        }
        if(this.heap.length === 1){
            return this.heap.pop()
        }
        let min = this.heap[0]
        this.heap[0] = this.heap[this.heap.length-1]
        this.heap.length--
        this.heapifyDown()
        return min
    }
    heapifyDown(){
        let currInd = 0
        while(this.heap[this.getLeftChildInd(currInd)] !== undefined){
            let minInd = this.getLeftChildInd(currInd)

            if(this.heap[this.getRightChildInd(currInd)] !== undefined
            && this.heap[this.getRightChildInd(currInd)] < this.getLeftChildInd(currInd)){
                minInd = this.getRightChildInd(currInd)
            }

            if(this.heap[currInd] > this.heap[minInd]){
                this.swap(currInd,minInd)
                currInd = minInd
            }else{
                return
            }
        }
    }
    heapSort(){
        const sortedArr = []
        while(this.heap.length > 0){
            sortedArr.push(this.extractMin())
        }
        return sortedArr
    }
}
const heap = new Heap()
heap.insert(10)
heap.insert(20)
heap.insert(8)
heap.insert(7)
heap.insert(2)
console.log(heap);
console.log(heap.heapSort())


