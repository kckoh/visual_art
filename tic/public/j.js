var x = 0;
var cols =20
var rows =20
var grid = new Array(cols)
var w,h
var closedSet = []
var openSet = []
var start, end
function Spot(i,j){
	this.f = 0
	this.g = 0
	this.h = 0
	this.x = i
	this.y = j
	this.color = 0
	this.show = function() {
		if(Math.random() > 0.2){
			this.color = 255
			fill(this.color)
		}
		else{
			this.color=150
			fill(this.color)
		}
		stroke(0)
		rect(this.x *w, this.y*h, w ,h)
	}


	this.shows = function(c,h,k) {
		fill(c,h,k)
		stroke(0)
		rect(this.x *w, this.y*h, w ,h)
	}
}

function setup() {
	
	console.log(w,h)
	createCanvas(400,400);
	w = width/cols
	h = height/rows
	for (var i = 0.; i < cols; i++) {
		grid[i] = new Array(rows)
	}


	for (var i = 0.; i < cols; i++) {
		for (var j = 0.; j < rows; j++) {
			grid[i][j] = new Spot(i,j)
		}
	}

	start = grid[0][0]
	end = grid[cols-1][rows-1]
	openSet.push(start)


	for (var i = 0; i <cols; i++) {
		for (var j = 0; j < rows; j++) {
			
			
				grid[i][j].show()
			
		}
	}

	



}

function draw(){
	if(openSet.length>0){

	}
	else{

	}


	

	

}