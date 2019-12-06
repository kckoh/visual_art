class Population {


  constructor(leng) {
    this.populationLeng = leng 
    this.pop = []
    
  }

  initial(){
       for(var i =0;i < this.populationLength;i++){
        population[i] = new Dna(18)
    }
  }

  

}