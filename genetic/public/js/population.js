class Population {


  constructor(leng) {
    this.populationLeng = leng 
    this.pop = []
    this.pool = []
    this.minDna =1
    this.maxDna =0
    this.dad
    this.mom
    this.child
    this.percent
    
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
        if(this.minDna > this.pop[i].score){
            this.minDna = this.pop[i].score
        }
        else if(this.maxDna < this.pop[i].score){
            this.maxDna = this.pop[i].score
        }

        this.pop[i].mutation()
        this.pool.push(this.pop[i])
        text(this.pop[i].generation , 50, i*30+10);
    }
  }

  crossover(){
   
  }

 
  pickParents(){
     //Pick two parents with probability according to relative fitness.
    this.dad = this.pool[getRandomIntInclusive(0,this.pool.length)]
    this.mom = this.pool[getRandomIntInclusive(0,this.pool.length)]
    this.percent = (this.dad.score - this.minDna) / (this.maxDna - this.minDna);
  }


  
}

 function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}

  function convertRange( value, r1, r2 ) { 
    return ( value - r1[ 0 ] ) * ( r2[ 1 ] - r2[ 0 ] ) / ( r1[ 1 ] - r1[ 0 ] ) + r2[ 0 ];
}
