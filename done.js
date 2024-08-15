// binary search tree 

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
// insertion 
    insert(value){
        const node = new Node(value)
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

// search a value
    search(root,value){
        if(!root){
            return null
        }else{
            if(root.value === value){
                return true
            }
            else if (value < root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }

// DFS traversal 
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
        this.preOrder(root.left)
        this.preOrder(root.right)
        console.log(root.value);
    }
// BFS traversal
    levelOrder(){
        const queue = []
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
// minimum value of the tree
    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }    
// maximum value of the tree 
    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }  
// delete a node from the tree
         
}
const bst = new BST()
bst.insert(10)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(7)
console.log(bst.search(3));
//bst.preOrder(bst.root)
//bst.inOrder(bst.root)
//bst.postOrder(bst.root)
//bst.levelOrder()
console.log(bst.min(bst.root));
console.log(bst.max(bst.root));

