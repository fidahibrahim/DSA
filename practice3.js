/*//============================================================ GRAPH =================================================================================
class Graph {
    constructor(){
        this.adjecencyList = {}
    }
    addVertex(vertex){
        if(!this.adjecencyList[vertex]){
            this.adjecencyList[vertex] = new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjecencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjecencyList[vertex2]){
            this.addVertex[vertex2]
        }
        this.adjecencyList[vertex1].add(vertex2)
        this.adjecencyList[vertex2].add(vertex1)
    }
    display(){
        for(let vertex in this.adjecencyList){
            console.log(vertex + '->' + [...this.adjecencyList[vertex]]);
        }
    }
    bfs(startVertex){
        if(!this.adjecencyList[startVertex]){
            return
        }
        const visited = {}
        const queue = []
        queue.push(startVertex)
        visited[startVertex] = true
        while(queue.length > 0){
            let currVertex = queue.shift()
            console.log(currVertex);
            for(let child of this.adjecencyList[currVertex]){
                if(!visited[child]){
                    queue.push(child)
                    visited[child] = true
                }
            }
        }
    }
}
const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addEdge('A','B')
graph.addEdge('B','C')
// graph.display()
graph.bfs('A')
*/

/*//======================================================== BS TREE ========================================================================================
class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null
    }
    insert(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(node.value < root.value){
            if(root.left === null){
                root.left = node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right === null){
                root.right = node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    search(root,value){
        if(!root){
            return null
        }else{
            if(root.value === value){
                return true
            }
            else if(value < root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }
    preOrder(root){
        if(root){
        console.log(root.value);
        this.preOrder(root.left)
        this.preOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }
    levelOrder(){
        let queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }
    height(root){
        if(!root){
            return -1
        }else{
            let leftHight = this.height(root.left)
            let rightHight = this.height(root.right)
            return Math.max(leftHight,rightHight) + 1
        }
    }
}

const bst = new BST()
bst.insert(10)
bst.insert(15)
bst.insert(5)
bst.insert(7)
bst.insert(3)
console.log(bst.search(bst.root,5));
console.log(bst.height(bst.root));
*/


//heap
/*
class heap{
    constructor(){
        this.heap = []
    }
    getParentInd(index){
        return Math.floor((index-1)/2)
    }
    getLeftIndex(index){
        return index*2 + 1
    }
    getRightInd(index){
        return index*2 + 2
    }
    swap(i1,i2){
        let temp = this.heap[i1]
        this.heap[i1] = this.heap[i2]
        this.heap[i2] = temp
    }
    peek(){
        if(this.heap.length === 0){
            return null
        }else{
            return this.heap[0]
        }
    }
    add(value){
        this.heap.push(value)
        this.heapifyUp()
    }
    heapifyUp(){
        let currInd = this.heap.length - 1
        while(this.heap[currInd] < this.heap[this.getParentInd(currInd)]){
            this.swap(currInd,this.getParentInd(currInd))
            currInd = this.getParentInd(currInd)
        }
    }
    exctractMin(){
        if(this.heap.length === 0){
            return null
        }
        let min = this.heap[0]
        this.heap[0] = this.heap[this.heap.length -1]
        this.heap.length --
        this.heapifyDown()
        return min
    }
    heapifyDown(){
        let currInd = 0
        while(this.heap[this.getLeftIndex(currInd)] !== undefined){
            let minInd = this.getLeftIndex(currInd)
            if(this.heap[this.getRightInd(currInd)] !== undefined &&
            this.heap[this.getRightInd(currInd)] < this.heap[this.getLeftIndex(currInd)]){
                let minInd = this.getRightInd(currInd)
            }

            if(this.heap[currInd] > this.heap[minInd]){
                this.swap(currInd,minInd)
                currInd = minInd
            }else{
                return
            }
        }
    }
}*/
//========================================= BST ===============================================================
/*
class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST{
    constructor(){
        this.root = null
    }
    insert(value){
        const node = new Node(value)
        if(this.root === null){
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(node.value < root.value){
            if(root.left === null){
                root.left = node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right === null){
                root.right = node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    search(root,value){
        if(!root){
            return null
        }else{
            if(root.value === value){
                return true
            }else if(value < root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }
    levelOrder(){
        let queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    inOreder(root,nodes=[]){
        if(root){
            this.inOreder(root.left,nodes)
            nodes.push(root.value);
            this.inOreder(root.right,nodes)
        }
        return nodes
    }
    findDepth(root,value,depth=0){
        if(root === null){
            return null
        }
        if(value === root.value){
            return depth
        }
        if(value < root.value){
            return this.findDepth(root.left,value,depth+1)
        }else{
            return this.findDepth(root.right,value,depth+1)
        }
    }
    findHeight(root){
        if(root === null){
            return -1
        }
        let leftHeight = this.findHeight(root.left)
        let rightHeight = this.findHeight(root.right)
        return Math.max(leftHeight,rightHeight)+1
    }
    isIdentical(r1,r2){
        if(!r1 && !r2){
            return true
        }
        if(r1 && r2){
            return ( r1.value === r2.value &&
                this.isIdentical(r1.left,r2.left) &&
                this.isIdentical(r1.right,r2.right)
            )    
        }
    }
    isBst(root,min=Number.NEGATIVE_INFINITY,max=Number.POSITIVE_INFINITY){
        if(root === null){
            return true
        }
        if(root.value <= min || root.value >= max){
            return false
        }
        return this.isBst(root.left,min,root.value) && this.isBst(root.right,root.value,max)
    }
    isBalanced(root){
        if(root === null){
            return true
        }
        let leftHeight = this.findHeight(root.left)
        let rightHeight = this.findHeight(root.right)
        if(Math.abs(leftHeight - rightHeight) > 1){
            return false
        }
        return this.isBalanced(root.left) && this.isBalanced(root.right)
    }
    findClosestValue(root,target){
        let closestValue = root.value
        while(root){
            if(Math.abs(target - closestValue) > Math.abs(target - root.value)){
                closestValue = root.value
            }
            if(target < root.value){
                root = root.left
            }
            else if(target > root.value){
                root = root.right
            }else{
                break
            }
        }
        return closestValue
    }
    isPrime(num){
        if(num % 2 === 1){
            return true
        }
        return false
    }
    printPrime(root){
        if(root !== null){
            if(this.isPrime(root.value)){
                console.log(root.value);
            }
            this.printPrime(root.left)
            this.printPrime(root.right)
        }
    }
    revertTree(root){
        if(root === null){
            return null
        }
        let temp = root.left
        root.left = root.right
        root.right = temp
        this.revertTree(root.left)
        this.revertTree(root.right)
    }
    find(){
        if(this.root===null || (this.root.left === null && this.root.right === null)){
            return null
        }
        let nodes = this.inOreder(this.root)
        if(nodes.length < 3){
            return null
        }
        return nodes[nodes.length - 2]
    }
}
const bst = new BST()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

const bst1 = new BST()
bst1.insert(10)
bst1.insert(18)
bst1.insert(5)
bst1.insert(3)
bst1.insert(7)

console.log(bst.find());
*/
/*
class Heap{
    constructor(){
        this.heap = []
    }
    getParentInd(i){
        return Math.floor((i-1)/2)
    }
    getLeftInd(i){
        return i*2 + 1
    }
    getRightInd(i){
        return i*2 + 2
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
        while(this.heap[currInd] > this.heap[this.getParentInd(currInd)]){
            this.swap(currInd,this.getParentInd(currInd))
            currInd = this.getParentInd(currInd)
        }
    }
    extractMax(){
        if(this.heap.length === 0){
            return null
        }
        if(this.heap.length === 1){
            return this.heap.pop()
        }
        let max = this.heap[0]
        this.heap[0] = this.heap[this.heap.length - 1]
        this.heap.length--
        this.heapifyDown()
        return max
    }
    heapifyDown(){
        let currInd = 0
        while(this.heap[this.getLeftInd(currInd)] !== undefined){
            let maxInd = this.getLeftInd(currInd)
            if(this.heap[this.getRightInd(currInd)] !== undefined && 
               this.heap[this.getRightInd(currInd)] > this.heap[this.getLeftInd(currInd)]){
                maxInd = this.getRightInd(currInd)
            }
            if(this.heap[currInd] < this.heap[maxInd]){
                this.swap(currInd,maxInd)
                currInd = maxInd
            }else{
                return
            }
        }
    }
    heapSort(arr){
        this.heap = []
        for(let ele of arr){
            this.insert(ele)
        }
        let sortedArr = []
        while(this.heap.length > 0){
            sortedArr.push(this.extractMax())
        }
        return sortedArr
    }
}
let heap = new Heap()
heap.insert(90)
heap.insert(44)
heap.insert(70)
heap.insert(40)
heap.insert(25)
heap.insert(5)
console.log(heap);
console.log(heap.heapSort([3,1,5,7,8,2]))
*/

class Graph{
    constructor(){
        this.adjecencyList = []
    }
    addVertex(v){
        if(!this.adjecencyList[v]){
            this.adjecencyList[v] = new Set()
        }
    }
    addEdge(v1,v2){
        if(!this.adjecencyList[v1]){
            this.addVertex(v1)
        }
        if(!this.adjecencyList[v2]){
            this.addVertex(v2)
        }
        this.adjecencyList[v1].add(v2)
        this.adjecencyList[v2].add(v1)
    }
    bfs(startingVertex){
        if(!this.adjecencyList[startingVertex]){
            return
        }
        const visited = {}
        const queue = []
        queue.push(startingVertex)
        while(queue.length > 0){
            let currVertex = queue.shift()
            console.log(currVertex);
            visited[currVertex] = true
            for(let child of this.adjecencyList[currVertex]){
                if(!visited[child]){
                    queue.push(child)
                    visited[child] = true
                }
            }
        }
    }
}
const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addEdge('A','B')
graph.addEdge('B','C')
graph.bfs('A')

