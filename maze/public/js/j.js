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
    this.walls = [true,true,true,true]
    Cell.prototype.addNode = function (){
        // four corners
        if(this.x == 0 && this.y == 0){
            this.neighbours.push(grid[0][1])
            this.neighbours.push(grid[1][0])
        }

        else if(this.x == 0 && this.y == (rows-1)){
            this.neighbours.push(grid[0][cols-2])
            this.neighbours.push(grid[1][cols-1])
        }

        else if(this.x == cols-1 && this.y == (rows-1)){
            this.neighbours.push(grid[rows-1][cols-2])
            this.neighbours.push(grid[rows-2][cols-1])
        }

        else if(this.x == cols-1 && this.y == 0){
            this.neighbours.push(grid[rows-2][0])
            this.neighbours.push(grid[rows-1][1])
        }

        // left side logic
        else if(this.x == 0 && this.y > 0){
            // right side
            this.neighbours.push(grid[this.x+1][this.y])
            // up 
            this.neighbours.push(grid[this.x][this.y-1])
            // bottom
            this.neighbours.push(grid[this.x][this.y+1])
        }

        // bottom
        else if(this.x > 0 && this.y == cols-1){
            // right side
            this.neighbours.push(grid[this.x+1][this.y])
            // up 
            this.neighbours.push(grid[this.x][this.y-1])
            // left
            this.neighbours.push(grid[this.x-1][this.y])
        }

        // right
        else if(this.x == cols-1 && this.y >0){
            // up 
            this.neighbours.push(grid[this.x][this.y-1])
            // left
            this.neighbours.push(grid[this.x-1][this.y])
            // bottom
            this.neighbours.push(grid[this.x][this.y+1])
        }

        // top
        else if(this.x > 0 && this.y == 0){
            // left
            this.neighbours.push(grid[this.x-1][this.y])
            // bottom
            this.neighbours.push(grid[this.x][this.y+1])
            // right side
            this.neighbours.push(grid[this.x+1][this.y])
        }
        else{
            // right side
            this.neighbours.push(grid[this.x+1][this.y])
            // up 
            this.neighbours.push(grid[this.x][this.y-1])
            // left
            this.neighbours.push(grid[this.x-1][this.y])
            // bottom
            this.neighbours.push(grid[this.x][this.y+1])
        }
    }

    this.removeWall = function (){
        this.neighbours.forEach(element => {
            if(element.visited){
                
            }
        })
    }

    

	this.show = function() {     
       var x = this.x*w
       var y = this.y*w
       
        stroke(255)
        if(this.walls[0] ){
            // top
            line(x,y,x+w,y)
        }

        if(this.walls[1] ){
            // right
            line(x+w,y,x+w,y+w)
        }

        if(this.walls[2] ){
            // bottom
            line(x,y+w,x+w,y+w)
        }

        if(this.walls[3] ){
            // left
            line(x,y,x,y+w)
        }
        
        if (this.visited == true){
            fill(255,0,255,100)
            noStroke()
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
    for (var i = 0.; i < cols; i++) {
		for (var j = 0.; j < rows; j++) {
			grid[i][j].addNode()
		}
    }


     
    
    
  


  current = grid[9][0]

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
      
    current = grid[9][a]
    if(a !=9){
        a++
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
