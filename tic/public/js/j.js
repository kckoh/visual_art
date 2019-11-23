var x = 0;
var cols =3
var rows =3
var grid = new Array(cols)
var w,h
var alternate


function tic(i,j){
	this.x = i
	this.y = j
    this.color = 0
    this.isBlack = false
	this.show = function() {
            if (this.isBlack ==false){
                 fill(255)
                stroke(0)
                rect(this.x *w, this.y*h, w ,h)
                this.isBlack = true
            }
            else{
                 fill(0)
            stroke(0)
            rect(this.x *w, this.y*h, w ,w)
            this.isBlack = false
            }

           
		
	}


}

function setup() {
	
	createCanvas(300,300);
	w = width/cols
    h = height/rows
    console.log(w,h)
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
    	

}


function mouseClicked(event) {
    // First row
    if(event.screenX < 108 && event.screenY < 170){
        grid[0][0].show()
    }

    if( ((event.screenX > 108) && (event.screenX < 208))  && (event.screenY < 170)  ){
        grid[1][0].show()
    }

    if( ((event.screenX > 208) && (event.screenX < 308))  && (event.screenY < 170)  ){
        grid[2][0].show()
    }

    // second row
    if(event.screenX < 108 && ((event.screenY > 170) && (event.screenY < 270))){
        grid[0][1].show()
    }
    
    if(((event.screenX > 108) && (event.screenX < 208)) && ((event.screenY > 170) && (event.screenY < 270))){
        grid[1][1].show()
    }

    if(((event.screenX > 208) && (event.screenX < 308)) && ((event.screenY > 170) && (event.screenY < 270))){
        grid[2][1].show()
    }

    // third row

    if(event.screenX < 108 && ((event.screenY > 170) && (event.screenY > 270))){
        grid[0][2].show()
    }

    if(((event.screenX > 108) && (event.screenX < 208)) && (event.screenY > 270)){
        grid[1][2].show()
    }

    if(  ((event.screenX > 208) && (event.screenX < 308))  && (event.screenY > 270)){
        grid[2][2].show()
    }
    
  console.log(event.screenX, event.screenY)
}