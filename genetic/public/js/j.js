var target = "To be or not to be"
var population = []
var populationLength = 100
function setup() {
	
    noCanvas()

    createP(target)

    for(var i =0;i < populationLength;i++){
        population[i] = new Dna(18)
        population[i].randomWord()
        createP(population[i].word).position(150,i*50+100);
        population[i].fitness()
        console.log(population[i].score)
    }
}

function draw(){
   
    

}

