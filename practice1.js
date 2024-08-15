// ================== CONSTRUCTION OF LINKED LIST =========================


/*// single linked list 
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class linkedList{
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
}
const list = new linkedList()
console.log('its an empty list',list.isEmpty());

// double linked list
class Node{
    constructor(value){
        this.value = value
        this.prev = null
        this.next = null
    }
}
class doublyLinkedList{
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
}
let doublyList = new doublyLinkedList()
console.log('its an empty list',doublyList.isEmpty());  */


//============================= ARRAY TO LINKEDLIST =================================
/*
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class linkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0 
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head 
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size ++
    }
    arrList(arr){
        for(let value of arr){
            this.append(value)
        }
    }
    print(){
        let curr = this.head
        let listValues = ''
        while(curr){
            listValues +=`${curr.value} `
            curr = curr.next
        }
        console.log(listValues);
    }
}

const list = new linkedList()
const array = [1,2,3,4]
list.arrList(array)
list.print()                     
*/

/*//==================================== ADD NODE AT END & BEGINNING ===========================================

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class linkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    print(){
        let curr = this.head
        let listValues = ''
        while(curr){
            listValues += `${curr.value} `
            curr = curr.next
        }
        console.log(listValues);
    }
}
const list = new linkedList()
list.prepend(10)
list.prepend(5)
list.append(15)
list.append(20)
list.print()
*/

/*//================================================ DELETE NODE BY SPECIFIED INDEX =======================================

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class linkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    removeFrom(index){
        let removedNode
        if(index<0 || index>=this.size){
            return null
        }
        if(index === 0){
            removedNode = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i=0;i<=index-1;i++){
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
    }
    print(){
        let curr = this.head
        let listValues = ''
        while(curr){
            listValues += `${curr.value} `
            curr = curr.next
        }
        console.log(listValues);
    }
}
const list = new linkedList()
list.append(10)
list.append(20)
list.removeFrom(0)
list.print()
*/

/*//======================================================== DELETE NODE BY SPECIFIC VALUE ================================================

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class linkedList{
    constructor(){
        this.head = null
        this.next = null
    }
    isEmpty(){
        return this.size === 0
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    removeValue(value){
        let removedNode
        if(this.isEmpty()){
            return null
        }
        if(this.head.value === value){
            this.head = this.head.next
            this.size--
        }else{
            let prev = this.head
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next){
            removedNode = prev.next
            prev.next = removedNode.next
            this.size--
            }
            return null
        } 
    }
    print(){
        let curr = this.head
        let listValues = ''
        while(curr){
            listValues += `${curr.value} `
            curr = curr.next
        }
        console.log(listValues);
    }
}
const list = new linkedList()
list.prepend(10)
list.prepend(5)
list.append(15)
list.append(20)
list.print()
list.removeValue(15)
list.print()
*/

/*//======================================================== INSERT NODE ======================================================

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class linkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    insert(index,value){
        if(index<0 || index>this.size){
            return
        }
        if(index === 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }
    print(){
        let curr = this.head
        let listValues = ''
        while(curr){
            listValues += `${curr.value} `
            curr = curr.next
        }
        console.log(listValues);
    }

}
const list = new linkedList()
list.prepend(30)
list.prepend(20)
list.prepend(10)
list.print()
list.insert(0,5)
list.print()
list.insert(2,15)
list.print()
*/

/*//=================================================== SEARCH BY VALUE ====================================

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class linkedList{
    constructor(){
        this.head = null
        this.next = null
    }
    isEmpty(){
        return this.size === 0
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    search(value){
        if(this.isEmpty()){
            return -1
        }else{
            let i=0
            let curr = this.head
            while(curr){
                if(curr.value === value){
                    return i
                }
                curr = curr.next
                i++
            }
            return -1
        }
    }
    print(){
        let curr = this.head
        let listValues = ''
        while(curr){
            listValues += `${curr.value} `
            curr = curr.next
        }
        console.log(listValues);
    }

}
const list = new linkedList()
list.prepend(30)
list.prepend(20)
list.prepend(10)
list.print()
console.log(list.search(10));
*/

/*//================================================= REVERSE ==========================================
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class linkedList{
    constructor(){
        this.head = null
        this.next = null
    }
    isEmpty(){
        return this.size === 0
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
print(){
        let curr = this.head
        let listValues = ''
        while(curr){
            listValues += `${curr.value} `
            curr = curr.next
        }
        console.log(listValues);
    }
    reverse(){
        let curr = this.head
        let prev = null
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr 
            curr = next
        }
        this.head = prev
    }

}
const list = new linkedList()
list.prepend(30)
list.prepend(20)
list.prepend(10)
list.print()
list.reverse()
list.print()
*/

/*//==================================================== DOUBLY REMOVE ===============================================

class Node{
    constructor(value){
        this.value = value
        this.prev = null
        this.next = null
    }
}
class doublyList{
    constructor(){
        this.head = null 
        this.tail = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size++
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
    print(){
        if(this.isEmpty()){
            return null
        }else{
            let curr = this.head
            let out = ''
            while(curr){
                out += `${curr.value} `
                curr = curr.next
            }
            console.log(out);
        }
    }
}
const list = new doublyList()
list.prepend(10)
list.append(20)
list.append(25)
list.append(30)
list.remove(25)
list.print()
*/

/*//===================================================== LINEAR SEARCH ======================================
function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i
        }
    }
    return -1
}
console.log(linearSearch([1,2,3,4],3));
//====================================================== BINARY SEARCH =======================================
function binarySearch(arr,target){
    let startInd = 0
    let endInd = arr.length-1
    while(startInd<=endInd){
        let middleInd = Math.floor((startInd+endInd)/2)
        if(target === arr[middleInd]){
            return middleInd
        }
        if(target < arr[middleInd]){
            endInd = middleInd-1
        }else{
            startInd = middleInd+1
        }
    }
    return -1
}
console.log(binarySearch([1,2,3,4,5],1));
console.log(binarySearch([1,2,3,4,5],3));
console.log(binarySearch([1,2,3,4,5],4));

//==================================================== RECURSIVE BINARY =================================================
function recursiveBinary(arr,target){
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
    if(target < arr[middleInd]){
        return search(arr,target,startInd,middleInd-1)
    }else{
        return search(arr,target,middleInd+1,endInd)
    }
}
console.log(recursiveBinary([1,2,3,4],3));
*/


