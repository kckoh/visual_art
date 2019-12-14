function Graph(value){
    this.value = value
    this.edges = []
    this.parent = null
    this.discovered = false
    this.width = width*Math.random()
    this.height = width*Math.random()
    Graph.prototype.addNode = function (n){
        this.edges.push(n)
        line(this.width,this.height, n.width,n.height)
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


function setup() {
	//canvas
    createCanvas(300,500)

    gr1 = new Graph()
    gr2 = new Graph()
    gr3 = new Graph()
    gr1.addNode(gr2)
    gr2.addNode(gr3)
    for(var i = 0; i < 5;i++){
        ar[i] = new Graph()

    }
    //add other nodes start from here
    // for(var i = 0; i < 5;i++){
    //     ar[i].addNode()
        
    // }
    
    console.log(gr1.width,gr1.height,gr2.width,gr2.height)
    createP(euclideanDist(gr1.width,gr1.height,gr2.width,gr2.height))

    
    
}

function draw(){
    background(255)
    // we gotta change this to connect with edges maybe? because we need to change lines constantly
    for(var i = 0; i < 4;i++){
        ar[i].showLine(ar[i+1])
        ar[i].circle()
    }
    ar[4].circle()
    
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
    while(current.discovered != true){
        current.discovered = true
        array1 = current.edges;
        // find the shortest distance
            array1.forEach(element => {
                temp = euclideanDist(current.width,current.height, element.width,element.height)
                if(temp < short ){
                short = temp
                shortGraph = element
                }
            });
            
        shortGraph.parent = current
        current = shortGraph
        short = 100
    }
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



