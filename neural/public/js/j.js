var j
var answer = []
var x
var y
var width = 500
var perceptrion


function setup() {
	
    createCanvas(500, 500);

    // create answer
     for(var i = 0; i < 30;i++){
         x = width *Math.random()
         y = width *Math.random()
        if(y>x){
            fill(0)
        }
        else{
            fill(255)
        }
        circle(x,y,10)
    }
    
    line(0,0,500,500)

    

    j = createP("hello world")
    perceptrion = new Perceptron()
    perceptrion.addInputs([0,1,2,3,4,5])
    perceptrion.sumWeights()
    perceptrion.activation()
    answer.forEach(element => console.log([element[0], element[1]]))

}

function draw(){
    //background(255)
    // for(var i = 0; i < 30;i++){
    //     if(answer[i][1]>answer[i][0]){
    //         fill(0)
    //     }
    //     else{
    //         fill(255)
    //     }
    //     circle(answer[i][0],answer[i][1],10)
    // }

    //line(0,0,500,500)
    
   
}

