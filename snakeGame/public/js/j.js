var x = 250
var y = 250
var circleX
var circleY
var previous
function preload() {

}

function setup() {
  createCanvas(500,500)
  circleX = Math.floor(Math.random()*500)
  circleY =  Math.floor(Math.random()*500)
  for(var i = 0; i < 20;i ++){
        for(var j = 0; j < 20;j ++){
            fill(0,119,13)
            rect(i*25,j*25,25,25)
        
        }
    }
}

function draw(){
    //background(0)
    fill(0)
    rect(x,y,25,25)
    circle(circleX,circleY,20)
    if (x < 0|| x > 480 || y < 0 || y > 480 ){

    }
    else{

        if(keyCode ==LEFT_ARROW) {
        if( previous == RIGHT_ARROW){
            x += 1
        }
        else{
            x -= 1
            previous = LEFT_ARROW
        }
    }

    else if(keyCode == RIGHT_ARROW) {
        if( previous == LEFT_ARROW){
            x -= 1
        }
        else{
            x += 1
            previous = RIGHT_ARROW
        }
    }

    else if (keyCode ==UP_ARROW) {
    if(previous ==DOWN_ARROW){
            y += 1;
        }
        else{
               y-= 1;
               previous = UP_ARROW
        }
    }

    else if(keyCode == DOWN_ARROW) {
        if(previous ==UP_ARROW){
            y -= 1;
        }
        else{
               y += 1;
               previous = DOWN_ARROW
        }
    }

    }
    
}

