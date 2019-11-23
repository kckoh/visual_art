var x = 0;
var cols =3
var rows =3
var grid = new Array(cols)
var w,h
var alternate = 0


function tic(i,j){
	this.x = i
	this.y = j
    this.colored = false
    this.black = false
    this.green = false
	this.show = function() {
           
                fill(255)
                stroke(0)
                rect(this.x *w, this.y*h, w ,w)
    }
    
    this.color = ()=>{

                if(this.colored ==true){
                    
                }
                else if(alternate%2 ==0){
                    fill(100,200,100)
                    stroke(0)
                    rect(this.x *w, this.y*h, w ,h)
                    alternate++
                    this.colored = true
                    this.green = true
                }

                else{
                    this.colored = true
                    fill(0)
                    stroke(0)
                    rect(this.x *w, this.y*h, w ,h)
                    alternate++
                    this.black = true
                }
                
    }


}

function setup() {
	//canvas
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
			grid[i][j] = new tic(i,j)
		}
	}

    // showing boxes 
	for (var i = 0; i <cols; i++) {
		for (var j = 0; j < rows; j++) {
				grid[i][j].show()
		}
    }
    
    var button = createButton('click me');
  button.position(130, 320);

  button.mousePressed(reset);

    
}


function draw(){
    	logic()

}


function mouseClicked(event) {
    // if clicked on the certain box, make it colored
    console.log(event.screenY)

    // First row
    if(event.screenX < 108 && event.screenY < 170){
        grid[0][0].color()
    }

    if( ((event.screenX > 108) && (event.screenX < 208))  && (event.screenY < 170)  ){
        grid[1][0].color()
    }

    if( ((event.screenX > 208) && (event.screenX < 308))  && (event.screenY < 170)  ){
        grid[2][0].color()
    }

    // second row
    if(event.screenX < 108 && ((event.screenY > 170) && (event.screenY < 270))){
        grid[0][1].color()
    }
    
    if(((event.screenX > 108) && (event.screenX < 208)) && ((event.screenY > 170) && (event.screenY < 270))){
        grid[1][1].color()
    }

    if(((event.screenX > 208) && (event.screenX < 308)) && ((event.screenY > 170) && (event.screenY < 270))){
        grid[2][1].color()
    }

    // third row

    if(event.screenX < 108 && ((event.screenY > 270) && (event.screenY < 370 ))){
        grid[0][2].color()
    }

    if(((event.screenX > 108) && (event.screenX < 208)) && ((event.screenY > 270) && (event.screenY < 370 ))    ){
        grid[1][2].color()
    }

    if(  ((event.screenX > 208) && (event.screenX < 308))  && ((event.screenY > 270) && (event.screenY < 370 )) ){
        grid[2][2].color()
    }
    
  
}

function reset(){
    for (var i = 0; i <cols; i++) {
		for (var j = 0; j < rows; j++) {
                grid[i][j].show()
                grid[i][j].colored = false
                grid[i][j].black = false
                grid[i][j].green = false
		}
    }
    
}

function logic(){
    for (var i = 0; i <3; i++) {
                // chekcing for the columns 
                if (grid[i][0].black  && grid[i][1].black && grid[i][2].black ){
                    createP('black win');
                    reset()
                }

                else if(grid[i][0].green  && grid[i][1].green && grid[i][2].green){
                    createP('green win');
                    reset()
                }

                // chekcing for the rows
                else if (grid[0][i].black  && grid[1][i].black && grid[2][i].black    ){
                    createP('black win');
                    reset()
                }

                else if (grid[0][i].green  && grid[1][i].green && grid[2][i].green    ){
                    createP('green win');
                    reset()
                }

                // diagonal
                else if(grid[0][0].black &&  grid[1][1].black && grid[2][2].black  ){
                   createP('black win');
                    reset()
                }
                else if(grid[0][0].green &&  grid[1][1].green && grid[2][2].green  ){
                    createP('green win');
                    reset()
                }

                else if(grid[0][2].black &&  grid[1][1].black && grid[2][0].black  ){
                    createP('black win');
                    reset()
                }

                 else if(grid[0][2].green &&  grid[1][1].green && grid[2][0].green  ){
                    createP('green win');
                    reset()
                }
    }
    
}