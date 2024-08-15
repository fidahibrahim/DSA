//================================================== STACK WITH ARRAY ================================================================================
/*//basic stack
class Stack {
    constructor() {
        this.items = [];
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        console.log(this.size);
    }

    push(element) {
        this.items[this.size] = element;
        this.size++
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        let removedItem = this.items[this.size - 1]
        delete this.items[this.size - 1]
        this.size -= 1;
        return removedItem
    }

    peak() {
        if (this.isEmpty()) {
            console.log('empty');
        } else {
            console.log(this.items[this.size - 1]);
        }
    }

    print() {
        let str = '';
        for (let i = 0; i < this.size; i++) {
            str += this.items[i] + ' ';
        }

        console.log(str);
    }
}

const stack1 = new Stack();

console.log(stack.isEmpty());
stack.push(12);
stack.push(13);
stack.push(23);
stack.push(43);
stack.pop()
stack.peak()
stack.print();
*/



//========================================== stack with pointer (proper way) =======================================================================
/*
class Stack {
    constructor(size) {
      this.stack = new Array(size);
      this.size = 0;
      this.top = null;
    }
    push(val) {
      if (this.stack.length - 1 <= this.size) return "stack overflow";
      this.stack[this.size] = val;
      this.top = this.size;
      this.size++;
      return;
    }
    pop() {
      if (!this.top) return "stack underflow";
      this.stack[this.top] = undefined;
      this.size--;
      this.top = this.top - 1;
    }
    peek() {
      return this.stack[this.top];
    }
    display() {
      for (let i = 0; i <= this.top; i++) {
        console.log(this.stack[i]);
      }
    }
  }
  const stack = new Stack(10);
  stack.push(1);
  stack.push(2);
  stack.pop();
  stack.peek();
  stack.display();

  //=================================================== LINKED LIST STACK ==========================================================================

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
    push(value){
        const node = new Node(value)
        node.next = this.top
        this.top = node
        this.size++
    }
    pop(){
        if(!this.top){
            return null
        }
        let item = this.top.value
        this.top = this.top.next 
        this.size--
        return item
    }
    peek(){
        if(!this.top){
            return null
        }
        return this.top.value
    }
    display(){
        let curr = this.top
        while(curr){
            console.log(curr.value);
            curr = curr.next 
        }
    }
}
const mystack = new Stack()
mystack.push(10)
mystack.push(20)
mystack.push(30)
mystack.pop()
mystack.display()
*/

/*//======================================================== REVERSE STRING ==========================================================================

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
    return this.size === 0
  }
  push(value){
    const node = new Node(value)
    node.next = this.top
    this.top = node
    this.size++
  }
  pop(){
    if(!this.top){
      return null
    }
    let item = this.top.value
    this.top = this.top.next
    this.size--
    return item
  }
  reverse(string){
    for(let char of string){
      this.push(char)
    }
    let reversedStr = ''
    while(!this.isEmpty()){
      reversedStr += this.pop()
    }
    return reversedStr
  }
}

let mystack1 = new Stack()
console.log(mystack1.reverse('fida'))
*/

// delete middle element 

class Stack{
  constructor(){
    this.Stack = []
  }
  isEmpty(){
    return this.Stack.length === 0
  }
  push(data){
    return this.Stack.push(data)
  }
  pop(){
    return this.Stack.pop()
  }
  delete(middleInd){
    let temp = []
    let count = 0
    while(!this.isEmpty()){
      let ele = this.pop()
      count++
      if(count !== middleInd){
        temp.push(ele)
      }
    }
    while(temp.length> 0 ){
      this.push(temp.pop())
    }
  }
  display(){
    for(let i=0;i<this.Stack.length;i++){
      console.log(this.Stack[i]);
    }
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

let middleInd = Math.floor(stack.Stack.size/2)
stack.delete(middleInd)
stack.display()