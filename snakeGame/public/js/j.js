var x = 250
var y = 250
var circleX
var circleY
var previous
var arrow
var turn
function setup() {
  createCanvas(500,500)
  circleX = Math.floor(Math.random()*500)
  circleY =  Math.floor(Math.random()*500)
  
}

function draw(){
    // background
    for(var i = 0; i < 20;i ++){
        for(var j = 0; j < 20;j ++){
            fill(0,119,13)
            rect(i*25,j*25,25,25)
        
        }
    }
    // the head snake
    fill(0)
    rect(x,y,25,25)
    circle(circleX,circleY,20)


    if (x < 0|| x > 480 || y < 0 || y > 480 ){

    }
    else{
        //left:37
        //right:39
        //up:38
        //down:40
        
        
        if(keyCode ==LEFT_ARROW && y%25 == 0) {
            
        if( previous == RIGHT_ARROW){
            x += 1
        }
        else{
            x -= 1
            previous = LEFT_ARROW
        }
    }

    else if( keyCode != RIGHT_ARROW  && x%25 != 0 && previous != RIGHT_ARROW ){
        x -=1
    }

    if(keyCode == RIGHT_ARROW && y%25 == 0) {
        if( previous == LEFT_ARROW){
            x -= 1
        }
        else{
            x += 1
            previous = RIGHT_ARROW
        }
    }

     else if( keyCode != LEFT_ARROW  && x%25 != 0 && previous != LEFT_ARROW ){
        x +=1
    }




    if (keyCode ==UP_ARROW && x %25 ==0) {
    if(previous ==DOWN_ARROW){
            y += 1;
        }
        else{
               y-= 1;
               previous = UP_ARROW
        }
    }

    else if( keyCode != DOWN_ARROW  && y%25 != 0 && previous != DOWN_ARROW ){
        y -=1
    }

    

    

    if(keyCode == DOWN_ARROW && x %25 ==0) {
        if(previous ==UP_ARROW){
            y -= 1;
        }
        else{
               y += 1;
               previous = DOWN_ARROW
        }
    }
    else if( keyCode != UP_ARROW && y%25 != 0 && previous != UP_ARROW ){
        y +=1
    }




    }
    
}

