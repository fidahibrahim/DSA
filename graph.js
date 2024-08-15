//============================================= GRAPH ====================================================================================
//ADJECENCY MATRIX

const matrix = [
    [0,1,0],
    [1,0,1],
    [0,1,0]
]
console.log(matrix[1][2]);

//ADJECENCY LIST

const adjecencyList = {
    'A':['B'],
    'B':['A','C'],
    'C':['B']
}
console.log(adjecencyList['B']);

// GRAPH construction

class Graph{
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
            this.addVertex(vertex2)
        }
        this.adjecencyList[vertex1].add(vertex2)
        this.adjecencyList[vertex2].add(vertex1)

    }
    display(){
        for(let vertex in this.adjecencyList){
            console.log(vertex + '->' + [...this.adjecencyList[vertex]]);
        }
    }
    hasEdge(v1,v2){
        return (
            this.adjecencyList[v1] &&
            this.adjecencyList[v2] &&
            this.adjecencyList[v1].has(v2) &&
            this.adjecencyList[v2].has(v1)
        )
    }
    removeEdge(v1,v2){
        this.adjecencyList[v1].delete(v2)
        this.adjecencyList[v2].delete(v1)
    }
    removeVertex(vertex){
        if(!this.adjecencyList[vertex]){
            return null
        }
        for(let adjVertex of this.adjecencyList[vertex]){
            this.removeEdge(vertex,adjVertex)
        }
        delete this.adjecencyList[vertex]
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
            const currVertex = queue.shift()
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
graph.addVertex['C']
graph.addEdge('A','B')
graph.addEdge('B','C')
graph.hasEdge('A','B')
// graph.removeEdge('A','B')
// graph.removeVertex('A')
// graph.display()
console.log(graph.hasEdge('B','C'));
graph.bfs('A')

 