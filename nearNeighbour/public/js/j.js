// canvas width
var width = 720
// array where you save your graph
var ar = []


var q = []
var array1
var short = 1000
var shortestGraph
var temp = 0
var current
var visited = 0
var edgesLength
var numNodes = 20
var speed = 8

// simple graph class
function Graph(){
    this.edges = []
    this.discovered = false
    this.width = width*Math.random()
    this.height = width*Math.random()
    this.shortest = null
    Graph.prototype.addNode = function (n){
        this.edges.push(n)
        
    }

    Graph.prototype.showLine = function(node){
        line(this.width,this.height, node.width,node.height)
        
    }
    Graph.prototype.circle = function(node){

        circle(this.width, this.height, 10);
    }
    this.display = circle(this.width, this.height, 10);
}


function setup() {
	//canvas
    createCanvas(300,500)

 
    for(var i = 0; i < numNodes;i++){
        ar[i] = new Graph()

    }
    //add other nodes start from here
    for(var i = 0; i < numNodes;i++){
        for(var j = 0; j < numNodes;j++){
            if(i != j){
                ar[i].addNode(ar[j])
            }
            
        }
    }

    current = ar[0]
    edgesLength = current.edges.length
    current.discovered = true    
}

function draw(){
    background(255)
    // speed
    frameRate(speed)

    // If there is unvisited nodes
    // go through all the edges and find the shortest path
    // then draw the shortest path
    if(edgesLength+1 > visited){
        array1 = current.edges;
        // find the shortest distance
            array1.forEach(element => {
                if(element.discovered == true){

                }
                else{
                    temp = euclideanDist(current.width,current.height, element.width,element.height)
                    current.showLine(element)
                    console.log(temp)
                    if(temp < short  ){
                        short = temp
                        shortestGraph = element
                    }
                }
            }); 
                current.shortest = shortestGraph
                current.shortest.discovered = true
                current = shortestGraph
            
        short = 10000
        visited++
    }

    // this is where you show the circles and 
    for(var i = 0; i < edgesLength+1;i++){
        ar[i].circle()
        if(ar[i].shortest != null){
            ar[i].showLine(ar[i].shortest)
        }
    }


    
    
}


// Nearest Neighbour alogorithm
function NearestNeighbour(start_v){
    // setup variables
    var q = []
    var array1
    var short = 1000
    var shortestGraph
    var temp = 0
    var current = start_v
    current.discovered = true
    var visited = 0
    var edgesLength = current.edges.length
    
    // while there is unvisited nodes
    // go through all the edges and find the shortest path
    // then set it as the shortest path
    while(edgesLength+1 > visited){
        array1 = current.edges;
        // find the shortest distance
            array1.forEach(element => {
                if(element.discovered == true){

                }
                else{
                    temp = euclideanDist(current.width,current.height, element.width,element.height)
                    current.showLine(element)
                    console.log(temp)
                    if(temp < short  ){
                        short = temp
                        shortestGraph = element
                    }
                }
            }); 
                current.shortest = shortestGraph
                current.shortest.discovered = true
                current = shortestGraph
            
        short = 10000
        visited++
    }
    return current
}


// function for euclidean distance
function euclideanDist(num1,num2,num3,num4){

    return Math.sqrt(Math.pow((num1 -num3),2) + Math.pow((num2 -num4),2))
}

