class Population {


  constructor(leng) {
    this.populationLeng = leng 
    this.pop = []
    this.pool = []
    this.minDna = new Dna(18)
    this.maxDna = new Dna(18)
    this.dad
    this.mom
    this.child
    this.percent
    this.score
    this.target = "To be or not to be"
  }

  initial(){
       for(var i =0;i < this.populationLeng;i++){
        this.pop[i] = new Dna(18)
        this.pop[i].randomWord()
    }
    
  }

  selection(){
      for(var i =0;i < populationLength;i++){
        text(this.pop[i].word , 150, i*30+10);
        
        this.pop[i].fitness()
        if(this.minDna.score > this.pop[i].score){
            this.minDna = this.pop[i]
        }
        else if(this.maxDna.score < this.pop[i].score){
            this.maxDna = this.pop[i]
        }

        //this.pop[i].mutation()
        this.pool.push([this.pop[i].word,this.pop[i].score])
        text(this.pop[i].generation , 50, i*30+10);
    }
  }

  crossover(){
    for(var i =0;i < populationLength;i++){
       
        this.pop[i].word = this.maxDna.word.slice(0,9) + this.maxDna.word.slice(9,19)

       this.pop[i].mutation()
        
    }
  }

 



}


 function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}
