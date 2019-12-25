var x = 250
var y = 250
var previous
function preload() {

}

function setup() {
  createCanvas(500,500)
  
}

function draw(){
    background(255)
    rect(x,y,20,20)

    if(keyCode ==LEFT_ARROW) {
         if(previous ==RIGHT_ARROW){
            x += 1;
        }
        else{
               x -= 1;
        }
    previous =    LEFT_ARROW
    }

    else if(keyCode == RIGHT_ARROW) {
        if(previous == LEFT_ARROW){
            x -= 1;
        }
        else{
               x += 1;
        }
        previous =    RIGHT_ARROW
    }

    else if (keyCode ==UP_ARROW) {
    // if(previous ==DOWN_ARROW){
    //         y += 1;
    //     }
    //     else{
    //            y-= 1;
    //     }
    // previous = UP_ARROW
    }

    else if(keyCode == DOWN_ARROW) {
    //     if(previous ==UP_ARROW){
    //         y -= 1;
    //     }
    //     else{
    //            y += 1;
    //     }
    // previous = DOWN_ARROW
    }
}

