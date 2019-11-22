var x = 0;
var cols =3
var rows =3
var grid = new Array(cols)
var w,h


function tic(i,j){
	this.x = i
	this.y = j
	this.color = 0
	this.show = function() {
        if(this.x ==0 && this.y ==0){
            fill(0)
            stroke(0)
		    rect(this.x *w, this.y*h, w ,h)
        }
        else{
            fill(255)
            stroke(0)
            rect(this.x *w, this.y*h, w ,h)
        }
		
	}

    this.clicked = ()=>{
        
        fill(0)
    }

}

function setup() {
	
	createCanvas(300,300);
	w = width/cols
	h = height/rows
	for (var i = 0.; i < cols; i++) {
		grid[i] = new Array(rows)
	}


	for (var i = 0.; i < cols; i++) {
		for (var j = 0.; j < rows; j++) {
			grid[i][j] = new tic(i,j)
		}
	}

	for (var i = 0; i <cols; i++) {
		for (var j = 0; j < rows; j++) {
				grid[i][j].show()
		}
	}

	



}

function draw(){
    	for (var i = 0; i <cols; i++) {
		    for (var j = 0; j < rows; j++) {
				grid[i][j].show()
		    }
	    }

}


function mouseClicked(event) {
    var clickedX = screenX

    
  console.log(event.screenX)
}