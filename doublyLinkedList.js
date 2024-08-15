// Construction of doubly linkedlist
class Node {                     
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    getSize() {
      return this.size;
    }
  
    prepend(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      }
      this.size++;
    }
  
    append(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      }
      this.size++;
    }
  
    removeFromFront() {
      if (this.isEmpty()) {
        return null;
      }
      const value = this.head.value;
      this.head = this.head.next;
      this.size--;
      return value;
    }
  
    removeFromEnd() {
      if (this.isEmpty()) {
        return null;
      }
      const value = this.tail.value;
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      this.size--;
      return value;
    }


    removeFrom(index){
      if(index<0 || index>this.size){
        return null
      }
      if(index === 0){
       
        this.head = this.head.next;
        this.size--;
       
      }
      if(index===this.size-1){
       return this.removeFromEnd()
      }else{
        let removeNode
        let curr = this.head 
        for(let i=0;i<index-1;i++){
          curr = curr.next
        }
        removeNode = curr.next
        curr.next = removeNode.next
        this.size--
      }
    }

    remove(value){
      if(this.isEmpty()){
          return console.log('list is empty');
      }else{
          let removedNode
          if(this.head.value === value){
              this.head = this.head.next 
              this.size--
          }else{
              let prev = this.head 
              while(prev.next && prev.next.value !== value){
                  prev = prev.next
              }
              removedNode = prev.next
              prev.next = removedNode.next
              this.size--
          }
          return -1
      }
  }
  
    print() {
      if (this.isEmpty()) {
        console.log("List is empty");
      } else {
        let curr = this.head;
        let list = "";
        while (curr) {
          list += `${curr.value} `;
          curr = curr.next;
        }
        console.log(list);
      }
    }
  
    printReverse() {
      if (this.isEmpty()) {
        console.log("List is empty");
      } else {
        let curr = this.tail;
        let list = "";
        while (curr) {
          list += `${curr.value} `;
          curr = curr.prev;
        }
        console.log(list);
      }
    }
  }
  
  const list = new DoublyLinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.prepend(0);
  list.removeFrom(0)
  list.print();
  

  