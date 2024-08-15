/*//========================================== basic queue ===========================================================
class Queue{
    constructor(){
        this.queue = []
        this.front = 0
        this.rear = 0
    }
    isEmpty(){
        return this.rear - this.front == 0
    }
    getSize(){
        return this.rear - this.front
    }
    enqueue(element){
            this.queue[this.rear] = element
            this.rear++
    }
    dequeue(){
        if(this.isEmpty()){
            console.log('queue is empty');
            return undefined
        }
        let removedValue = this.queue[this.front]
        delete this.queue[this.front]
        this.front ++
        return removedValue
    }
    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.queue[this.front]
    }
    print(){
        let list = ''
        for(let i=this.front;i<this.rear;i++){
            list += `${this.queue[i]} `
        }
        console.log(list);
    }
}
let queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.dequeue()
console.log(queue.peek());
queue.print()
*/

/*//============================================================= linkedlist queue ============================================================

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class queueLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size
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
        this.size ++
    }
    dequeue(){
        if(this.isEmpty()){
            return null
        }else{
            const removedNode = this.head
            this.head = this.head.next
            this.size --
            if(this.isEmpty()){
                this.tail = null
            }
            return removedNode
        }
        
    }
    peek(){
        return this.head.value
    }
    print(){
        let list = ''
        let curr = this.head
        while(curr){
            list += `${curr.value} `
            curr = curr.next
        }
        console.log(list);
    }
}
const LLqueue = new queueLinkedList()
LLqueue.enqueue(10)
LLqueue.enqueue(20)
LLqueue.enqueue(30)
LLqueue.dequeue()
console.log(LLqueue.peek())
LLqueue.print()
*/

//=========================================================== CIRCULAR QUEUE =============================================================

class circularQueue{
    constructor(capacity){
        this.queue = new Array(capacity)
        this.capacity = capacity
        this.front = -1
        this.rear = -1
        this.size = 0
    }
    isFull(){
        return this.capacity === this.size
    }
    isEmpty(){
        return this.size === 0
    }
    enqueue(element){
        if(!this.isFull()){
            this.rear = (this.rear + 1) % this.capacity
            this.queue[this.rear] = element
            this.size ++
            if(this.front == -1){
                this.front = this.rear
            }
        }
    }
    dequeue(){
        if(this.isEmpty()){
            return null
        }
        const eleToRmv = this.queue[this.front]
        this.queue[this.front] = null
        this.front = (this.front + 1) % this.capacity
        this.size --
        if(this.isEmpty()){
            this.front = -1
            this.rear = -1
        }
        return eleToRmv
    }
    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.queue[this.front]
    }
    print(){
        if(this.isEmpty()){
            console.log('queue is empty');
        }
        let i 
        let list = ''
        for(i=this.front; i!==this.rear; i=(i+1)%this.capacity){
            list += this.queue[i]+' '
        }
        list += this.queue[i]
        console.log(list);
    }
}
const que = new circularQueue(5)
que.enqueue(10)
que.enqueue(20)
que.enqueue(30)
que.enqueue(40)
que.enqueue(50)
que.print()