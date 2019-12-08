var target = "To be or not to be"
var finished = []

var populationLength = 10
var generation = 0
var x = 1
var populationObject 

function setup() {
	
    createCanvas(710, 400);

    createP(target)
    populationObject = new Population(populationLength)


    // for(var i =0;i < populationLength;i++){
    //     population[i] = new Dna(18)
    // }
    
    populationObject.initial()
}

function draw(){
    background(255)
    frameRate(20)
   populationObject.selection()
    
    
  
}

