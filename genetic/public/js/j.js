var target = "To be or not to be"
var finished = []
var population = []
var populationLength = 10
var generation = 0
var x = 1
var populationObject = new Population(populationLength)

function setup() {
	
    createCanvas(710, 400);

    createP(target)

    for(var i =0;i < populationLength;i++){
        population[i] = new Dna(18)
    }
    
    populationObject.initial()

}

function draw(){
    background(255)
    frameRate(20)
    for(var i =0;i < populationLength;i++){
        text(population[i].word , 150, i*25);
        population[i].match()
        population[i].fitness()
        text(population[i].generation , 50, i*25);
    }
    
    
  
}

