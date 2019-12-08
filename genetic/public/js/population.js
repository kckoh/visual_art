class Population {


  constructor(leng) {
    this.populationLeng = leng 
    this.pop = []
    
  }

  initial(){
       for(var i =0;i < this.populationLeng;i++){
        this.pop[i] = new Dna(18)
    }
  }

  selection(){
      for(var i =0;i < populationLength;i++){
        text(this.pop[i].word , 150, i*30+10);
        this.pop[i].fitness()
        this.pop[i].mutation()
        text(this.pop[i].generation , 50, i*30+10); 
        
       
    }
  }
  



  

}