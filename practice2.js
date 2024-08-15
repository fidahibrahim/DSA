/*//====================================================== bubble sort ======================================================================================

function bubbleSort(arr){
    let swapped 
    do {
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

console.log(bubbleSort([2,6,1,8,0]));
*/
// complexity O(n2)

/*//========================================================= insertion sort ========================================================================

function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let eleToInsert = arr[i]
        let j = i-1
        while(j>=0 && arr[j]>eleToInsert){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = eleToInsert
    }
    return arr
}
console.log(insertionSort([2,6,1,8,0]));
// O(n2)
*/

/*//========================================================= quick sort ================================================================================

function quickSort(arr){
    if(arr.length < 2){
        return arr
    }
    let pivot = arr[arr.length-1]
    let left = []
    let right = []
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
console.log(quickSort([2,6,1,8,0]));
// worst case : O(n2)
// average case : O(n log n)
*/


/*//========================================================== merge sort ===========================================================================

function mergeSort(arr){
    if(arr.length < 2){
        return arr
    }
    let midInd = Math.floor(arr.length/2)
    let left = arr.slice(0,midInd)
    let right = arr.slice(midInd)
    return merge(mergeSort(left),mergeSort(right))
}
function merge(left,right){
    let sortedArr = []
    while(left.length && right.length){
        if(left[0]<=right[0]){
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr,...left,...right]
}
console.log(mergeSort([2,6,1,8,0]));
// complexity O(n log n)
*/

/*//============================================================= selection sort ===========================================================================

function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let minInd = i
        for(j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minInd]){
                minInd = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[minInd]
        arr[minInd] = temp
    }
    return arr
}
console.log(selectionSort([2,6,1,8,0]));
// O(n2)
*/

//================================================================== STACK ====================================================================
/*//array stack 

class Stack{
    constructor(size){
        this.stack = new Array(size)
        this.size = 0
        this.top = null
    }
    push(value){
        if(this.stack.length -1 <= this.size){
            console.log('overflow');
        }
        this.stack[this.size] = value
        this.top = this.size
        this.size++
    }
    pop(){
        if(!this.top){
            console.log('underflow');
        }
        let poppedItem = this.stack[this.top]
        this.stack[this.top] = undefined
        this.top = this.top - 1
        this.size--
    }
    peek(){
        if(!this.top){
            return null
        }
        return this.stack[this.top]
    }
    display(){
        if(!this.top){
            return null
        }
        for(let i=0;i<=this.top;i++){
            console.log(this.stack[i]);
        }
    }
}
const myStack = new Stack(5)
myStack.push(10)
myStack.push(20)
myStack.push(30)
myStack.display()
*/

/*// linkedlist stack

class Node{
    constructor(value){
        this.value = value 
        this.next = null
    }
}
class Stack{
    constructor(){
        this.top = null
        this.size = 0
    }
    isEmpty(){
        return this.top == null
    }
    push(value){
        const node = new Node(value)
        node.next = this.top
        this.top = node
        this.size++
    }
    pop(){
        if(this.isEmpty()){
            return null
        }
        let poppedItem = this.top.value
        this.top = this.top.next
        this.size --
        return poppedItem
    }
    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.top.value
    }
    reverse(string){
        let reverse = ''
        for(let char of string){
            this.push(char)
        }
       while(!this.isEmpty()){
        reverse += this.pop()
       }
       return reverse
    }
    display(){
        let curr = this.top
        while(curr){
            console.log(curr.value);
            curr = curr.next
        }
    }
}
const myStack = new Stack()
// myStack.push(10)
// myStack.push(20)
// myStack.push(30)
// myStack.display()
console.log(myStack.reverse('fida'));
*/

//========================================================== QUEUE ======================================================================================
/*
class Queue{
    constructor(){
        this.queue = []
        this.front = 0
        this.rear = 0
    }
    isEmpty(){
        return this.rear - this.front === 0
    }
    getSize(){
        return this.rear - this.front
    }
    enqueue(value){
        this.queue[this.rear] = value
        this.rear++
    }
    dequeue(){
        if(this.isEmpty()){
            console.log('empty queue');
        }
        let removedItem = this.queue[this.front]
        delete this.queue[this.front]
        this.front++
        return removedItem
    }
    peek(){
        if(this.isEmpty()){
            console.log('empty queue');
        }
        return this.queue[this.front]
    }
    display(){
        for(let i=0;i<this.rear;i++){
            console.log(this.queue[i]);
        }
    }
}

const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.dequeue()
queue.display()
*/

// linked list 

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class Queue{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    enqueue(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
    dequeue(){
        if(this.isEmpty()){
            return null
        }
        let item = this.head
        this.head = this.head.next 
        this.size--
    }
}

// circular queue 
class circularQueue{
    constructor(capacity){
        this.queue = new Array(capacity)
        this
    }
}
