var cols = 10
var rows = 10
var grid = new Array(cols)
var w,h
var cell1
var current
var a = 0

function shuffles(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

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
    this.position = ''
    this.neighbours = []
    this.ex = []
    this.walls = [true,true,true,true]
    Cell.prototype.addNode = function (){
        var randomNum = Math.random()
        // four corners
        if(this.x == 0 && this.y == 0){
            // if(randomNum < 0.5){
            //     this.neighbours.push(grid[0][1])
            //     this.position = 'right'
            // }
            // else{
            //     this.neighbours.push(grid[1][0])
            //     this.position = 'bottom'
            // }
                //right
            this.ex.push(grid[0][1])
                //bottom
            this.ex.push(grid[1][0])
            this.neighbours = shuffles(this.ex)
        }

        else if(this.x == 0 && this.y == (rows-1)){
            // if(randomNum < 0.5){
            //     this.neighbours.push(grid[0][cols-2])
            //     this.position = 'top'
            // }
            // else{
            //     this.neighbours.push(grid[1][cols-1])
            //     this.position = 'right'
            // }
                // top
            this.ex.push(grid[0][cols-2])
                //righ
            this.ex.push(grid[1][cols-1])

            this.neighbours = shuffles(this.ex)
        }

        else if(this.x == cols-1 && this.y == (rows-1)){
            //  if(randomNum < 0.5){
            //     this.neighbours.push(grid[rows-1][cols-2])
            //     this.position = 'top'
            // }
            // else{
            //     this.neighbours.push(grid[rows-2][cols-1])
            //     this.position = 'left'
            // }

            //top
            this.ex.push(grid[rows-1][cols-2])
            //left
            this.ex.push(grid[rows-2][cols-1])
            this.neighbours = shuffles(this.ex)
        }

        else if(this.x == cols-1 && this.y == 0){
            //  if(randomNum < 0.5){
            //     this.neighbours.push(grid[rows-2][0])
            //     this.position = 'left'
            // }
            // else{
            //     this.neighbours.push(grid[rows-1][1])
            //     this.position = 'bottom'
            // }

            //left
            this.ex.push(grid[rows-2][0])
            //bottom
            this.ex.push(grid[rows-1][1])
            this.neighbours = shuffles(this.ex)
        }

        // left side logic
        else if(this.x == 0 && this.y > 0){
            // if(randomNum < 0.33){
            //     this.neighbours.push(grid[this.x+1][this.y])
            //     this.position = 'right'
            // }
            // else if(randomNum < 0.66 && randomNum < 0.33){
            //     this.neighbours.push(grid[this.x][this.y-1])
            //     this.position = 'top'
            // }

            // else{
            //     this.neighbours.push(grid[this.x][this.y+1])
            //     this.position = 'bottom'
            // }
            // right side
            this.ex.push(grid[this.x+1][this.y])
            // up 
            this.ex.push(grid[this.x][this.y-1])
            // bottom
            this.ex.push(grid[this.x][this.y+1])
            this.neighbours = shuffles(this.ex)
        }

        // bottom
        else if(this.x > 0 && this.y == cols-1){
            // if(randomNum < 0.33){
            //     this.neighbours.push(grid[this.x+1][this.y])
            //     this.position = 'right'
            // }
            // else if(randomNum < 0.66 && randomNum > 0.33){
            //     this.neighbours.push(grid[this.x][this.y-1])
            //     this.position = 'top'
            // }

            // else{
            //     this.neighbours.push(grid[this.x-1][this.y])
            //     this.position = 'left'
            // }


            // right side
            this.ex.push(grid[this.x+1][this.y])
            // up 
            this.ex.push(grid[this.x][this.y-1])
            // left
            this.ex.push(grid[this.x-1][this.y])
            this.neighbours = shuffles(this.ex)
        }

        // right
        else if(this.x == cols-1 && this.y >0){
            // if(randomNum < 0.33){
            //     this.neighbours.push(grid[this.x][this.y-1])
            //     this.position = 'top'
            // }
            // else if(randomNum < 0.66 && randomNum > 0.33){
            //     this.neighbours.push(grid[this.x-1][this.y])
            //     this.position = 'left'
            // }

            // else{
            //     this.neighbours.push(grid[this.x][this.y+1])
            //     this.position = 'bottom'
            // }
            // up 
            this.ex.push(grid[this.x][this.y-1])
            // left
            this.ex.push(grid[this.x-1][this.y])
            // bottom
            this.ex.push(grid[this.x][this.y+1])
            this.neighbours = shuffles(this.ex)
        }

        // top
        else if(this.x > 0 && this.y == 0){
            // if(randomNum < 0.33){
            //     this.neighbours.push(grid[this.x-1][this.y])
            //     this.position = 'left'
            // }
            // else if(randomNum < 0.66 && randomNum > 0.33){
            //     this.neighbours.push(grid[this.x][this.y+1])
            //     this.position = 'bottom'
            // }

            // else{
            //     this.neighbours.push(grid[this.x+1][this.y])
            //     this.position = 'right'
            // }

            // left
            this.ex.push(grid[this.x-1][this.y])
            // bottom
            this.ex.push(grid[this.x][this.y+1])
            // right side
            this.ex.push(grid[this.x+1][this.y])
            this.neighbours = shuffles(this.ex)
        }

        else{
            // if(randomNum < 0.25){
            //     this.neighbours.push(grid[this.x+1][this.y])
            //     this.position = 'right'
            // }
            // else if(randomNum < 0.5 && randomNum > 0.25){
            //     this.neighbours.push(grid[this.x][this.y-1])
            //     this.position = 'top'
            // }
            // else if(randomNum < 0.75 && randomNum > 0.5){
            //     this.neighbours.push(grid[this.x-1][this.y])
            //     this.position = 'left'
            // }

            // else{
            //     this.neighbours.push(grid[this.x][this.y+1])
            //     this.position='bottom'
            // }

            // right side
            this.ex.push(grid[this.x+1][this.y])
            // up 
            this.ex.push(grid[this.x][this.y-1])
            // left
            this.ex.push(grid[this.x-1][this.y])
            // bottom
            this.ex.push(grid[this.x][this.y+1])
            this.neighbours = shuffles(this.ex)
        }
    }

    this.removeWall = function (next){
        var x1 = next.x - this.x
        var y1 = next.y - this.y
        // right
          if(x1 == 1 && y1 == 0){
                    this.walls[1] = false
                    next.walls[3] = false
                }
        else if(x1 == -1 && y1 == 0){
                    this.walls[3] = false
                    next.walls[1] = false
                }
        else if(x1 == 0 && y1 == 1)
           { this.walls[2] = false
            next.walls[0] = false
        }
    

    else {
            this.walls[0] = false
            next.walls[2] = false
    }
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
            noStroke()
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
    for (var i = 0.; i < cols; i++) {
		for (var j = 0.; j < rows; j++) {
			grid[i][j].addNode()
		}
    }


     
    
    
  


  current = grid[4][5]

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
    next = current.neighbours[0]
    current.removeWall(next)
    current = current.neighbours[0]
    
    
   
    

    


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
