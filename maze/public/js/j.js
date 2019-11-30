var cols = 10
var rows = 10
var grid = new Array(cols)
var w,h
var cell1
var current
var a = 0
function Graph(value){
    this.value = value
    this.edges = []
    this.parent = null
    this.discovered = false
    Graph.prototype.addNode = function (n){
        this.edges.push(n)
    }
}


function Cell(i,j){
	this.x = i
    this.y = j
    this.visited = false
    this.neighbours = []
    Cell.prototype.addNode = function (n){
        this.neighbours.push(n)
    }
    this.color = function (){
        fill(190,130,200,105)
        noStroke()
        rect(this.x *w, this.y*h, w ,w)
    }

	this.show = function() {     
       var x = this.x*w
       var y = this.y*w
        stroke(255)
        // top
            line(x,y,x+w,y)
        // bottom
            line(x,y+w,x+w,y+w)
        // left
            line(x,y,x,y+w)
        // right
            line(x+w,y,x+w,y+w)

        if (this.visited == true){
            fill(255,0,255,100)
            rect(x,y,w,w)
        }
        
    }

}

function setup() {
	
    createCanvas(300,300);
    
    // width and height
	w = width/cols
    h = height/rows
    
    //making 2d arrays
	for (var i = 0.; i < cols; i++) {
        grid[i] = new Array(rows)
    }
    

    // make tic tac toe object in 2d arrays
	for (var i = 0.; i < cols; i++) {
		for (var j = 0.; j < rows; j++) {
			grid[i][j] = new Cell(i,j)
		}
    }
    
    
  current = grid[0][0]


  

}

function draw(){
    frameRate(3)
     // showing boxes 
      // showing boxes 
      background(51)
	for (var i = 0; i <cols; i++) {
		for (var j = 0; j < rows; j++) {
                grid[i][j].show()
		}
    }
    

    
    current.visited = true
      if(a !=9){
        a++
    }   
    current = grid[0][a]

    


}

function backtracking(cell){
    var stack = []
    var current;
    cell.visited = true
    stack.push(current)
    while (stack != 0){
        current = stack.pop()
        if (current.neighbours.length > 0){
            current.neighbours.forEach(element => {
                if(element.visited == false){
                    stack.push(current)
                }
            });
        }
    }
}
