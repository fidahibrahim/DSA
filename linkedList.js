// =========================================== Empty linked list ======================================================

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

    getSize(){
        return this.size
    }
}

const list = new linkedList()
console.log('list is empty?',list.isEmpty());
console.log('size of list',list.getSize()); 


 //================================================= PREPEND ===========================================================================

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
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size ++
    }

    reverseStr(str){
        for(let i=0;i<str.length;i++){
            this.prepend(str[i])
        }
    }
    pintList(){
        if(this.isEmpty()){
            console.log('list is empty');
        }else{
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues += ` ${curr.value} `
                curr = curr.next
            }
            console.log(listValues);
        }
    }
}
const list1 = new linkedList()
// list1.pintList()
// list1.prepend(10)
// list1.pintList()
// list1.prepend(20)
// list1.prepend(30)
list1.reverseStr('fida')
list1.pintList()  

//========================================================  APPEND ============================================================

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
    printList(){
        let curr = this.head
        let listValues = ''
        while(curr){
            listValues += `${curr.value} `
            curr = curr.next
        }
        console.log(listValues);
    }
}
let list2 = new linkedList()
list2.append(10)
list2.append(20)
list2.append(30)
list2.printList()


//================================================== INSERT ==============================================================

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
    getSize(){
        return this.size
    }
    insert(value,index){
        if(index<0 || index>this.size){
            return
        }
        if(index === 0 ){
            const node = new Node(value)
            node.next = this.head
            this.head = node
            this.size++
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
let list3 = new linkedList()
list3.insert(10,0)
list3.print()
list3.insert(20,0)
list3.insert(30,1)
list3.insert(40,2)
list3.print()
console.log(list3.getSize());  



//===================================================== REMOVE BY INDEX ================================================================

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
    insert(value,index){
        if(index<0 || index>this.size){
            return  
        }
        if(index === 0){
            const node = new Node(value)
            node.next = this.head
            this.head = node
            this.size++
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
    removeFrom(index){
        if(index<0 || index>=this.size){
            return null
        }
        let removedNode
        if(index===0){
            removedNode = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        return removedNode.value
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
let list0 = new linkedList()
list0.insert(10,0)
list0.insert(20,0)
list0.insert(30,1)
list0.insert(40,2)
list0.print()
list0.removeFrom(0)
console.log(list0.removeFrom(0));
list0.print() 

//======================================================== DELETE NODE BY SPECIFIC VALUE ================================================

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
const list4 = new linkedList()
list4.prepend(10)
list4.prepend(5)
list4.append(15)
list4.append(20)
list4.print()
list4.removeValue(15)
list4.print()


//================================================= REVERSE LL ==========================================
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
const list5 = new linkedList()
list5.prepend(30)
list5.prepend(20)
list5.prepend(10)
list5.print()
list5.reverse()
list5.print()







