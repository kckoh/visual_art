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

var width = 720
var gr1 
var gr2
var gr3
var ar = []
var check

function setup() {
	//canvas
    createCanvas(300,500)

 
    for(var i = 0; i < 5;i++){
        ar[i] = new Graph()

    }
    //add other nodes start from here
    for(var i = 0; i < 5;i++){
        for(var j = 0; j < 5;j++){
            if(i != j){
                ar[i].addNode(ar[j])
            }
            
        }
    }

    for(var i = 0; i < 5;i++){
        console.log(ar[i].edges)

    }

    NearestNeighbour(ar[0])
    for(var i = 0; i < 4;i++){
        //ar[i].showLine(ar[i].shortest)
        console.log(ar[i].shortest)
        ar[i].circle()
    }
    ar[4].circle()
    
    

    
    
}

function draw(){
    // background(255)
    // // we gotta change this to connect with edges maybe? because we need to change lines constantly
    // for(var i = 0; i < 4;i++){
    //     ar[i].showLine(ar[i+1])
    //     ar[i].circle()
    // }
    // ar[4].circle()
    
}


// Nearest Neighbour alogorithm

function NearestNeighbour(start_v){
    var q = []
    var v
    var array1
    var short = 100
    var shortGraph
    var temp
    var current = start_v
    current.discovered = true
    var visited = 0
    var edgesLength = current.edges.length
    
    while(edgesLength > visited){
        array1 = current.edges;
        // find the shortest distance
            array1.forEach(element => {
                temp = euclideanDist(current.width,current.height, element.width,element.height)
                if(temp < short && element.discovered == false ){
                short = temp
                shortGraph = element
                current.shortest = element
                }
            }); 
            // ------------here
        console.log(visited)
        current.shortest.discovered = true
        current = current.shortest
        short = 1000
        visited++
    }
    return current
}

function euclideanDist(num1,num2,num3,num4){

    return Math.sqrt(Math.pow((num1 -num3),2) + Math.pow((num2 -num4),2))
}


// reset the discovered and parent
function reset(arr){
    arr.forEach(element => {
        element.discovered = false
        element.parent = null
        }
    )
}



