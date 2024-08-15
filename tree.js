// FIND DEPTH OF A GIVEN NODE IN BST

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
    //=================================================== insertion ============================================================
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
    //================================================================= search =================================================
    search(root,value){
        if(!root){
            return null
        }else{
            if(value === root.value){
                return true
            }
            else if(value < root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }
    //================================================================= depth ===================================================
    findDepth(root,value,depth=0){
        if(root === null){
            return null
        }
        if(root.value === value){
            return depth
        }
        if(value < root.value){
            return this.findDepth(root.left,value,depth+1)
        }else{
            return this.findDepth(root.right,value,depth+1)
        }
    }
    //=================================================================== height =========================================================
    findHeight(root){
        if(root === null){
            return -1
        }
        const leftHeight = this.findHeight(root.left)
        const rightHeight = this.findHeight(root.right)
        return Math.max(leftHeight,rightHeight)+1
    }
    //================================================================= identical =========================================================
    isIdentical(r1,r2){
        if(!r1 && !r2){
            return true
        }
        if(r1 && r2){
            return ( r1.value === r2.value &&
            this.isIdentical(r1.left,r2.left) &&
            this.isIdentical(r1.right,r2.right))
        }
        return false
    }
    //================================================================ isBst ===============================================================
    isBst(root,min=Number.NEGATIVE_INFINITY,max=Number.POSITIVE_INFINITY){
        if(root === null){
            return true
        }
        if(root.value <= min || root.value >= max){
            return false
        }
        return this.isBst(root.left,min,root.value) && this.isBst(root.right,root.value,max)
    }
    //================================================================= isBalanced ==========================================================
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
    //================================================================== findClosestValue ========================================================
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
        }
        else{
            break
        }
    }
        return closestValue
    }
    //====================================================================== printPrimes ===========================================================
    isPrime(num){
        if(num%2 === 1){
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
    //======================================================================== secondLargest =======================================================
    secondLargest(){
        if(this.root === null || (this.root.left === null && this.root.right === null)){
            return null
        }
        let curr = this.root
        let parent = null
        while(curr.right){
            parent = curr
            curr = curr.right
        }
        if(curr.left){
            curr = curr.left
            while(curr.right){
                curr = curr.right
            }
            return curr.value
        }
        return parent.value
    }
}
const bst = new BST()
bst.insert(10)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(7)
const bst1 = new BST()
bst1.insert(10)
bst1.insert(18)
bst1.insert(5)
bst1.insert(3)
bst1.insert(7)
console.log(bst.secondLargest());








