class Node{
    constructor(){
        this.children = {}
        this.isEnd = false
    }
}
class Trie{
    constructor(){
        this.root = new Node()
    }
    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new Node()
            }
            node = node.children[char]
        }
        node.isEnd = true
    }
    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return node.isEnd
    }
    printArr(node=this.root,currWord='',result=[]){
        if(node.isEnd){
            result.push(currWord)
        }
        for(let char in node.children){
            this.printArr(node.children[char],currWord+char,result)
        }
        return result
    }
    autoComplete(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.children[char]){
                return null
            }
            node = node.children[char]
        }
        let list = []
        this.collectWords(node,prefix,list)
        return list
    }
    collectWords(node,prefix,list){
        if(node.isEnd){
            list.push(prefix)
        }
        for(let char in node.children){
            this.collectWords(node.children[char],prefix+char,list)
        }
    }
}
const trie = new Trie()
trie.insert('fida')
trie.insert('firza')
trie.insert('irza')
console.log(trie.search('fida'))
console.log(trie.printArr())
console.log(trie.autoComplete('fi'))