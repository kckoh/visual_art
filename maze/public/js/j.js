var cols = 10
var rows = 10
var grid = new Array(cols)
var w,h

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
	this.show = function() {     
        fill(0)
        stroke(255)
        rect(this.x *w, this.y*h, w ,w)
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
			grid[i][j] = new cell(i,j)
		}
	}

    // showing boxes 
	for (var i = 0; i <cols; i++) {
		for (var j = 0; j < rows; j++) {
				grid[i][j].show()
		}
    }
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
