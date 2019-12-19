class Perceptron {


  constructor() {
    this.inputs = []
    this.weights = []
    this.sum
    this.output  
  }


  addInputs(array){
    this.inputs = array

  }

  sumWeights(){
        this.sum = 0
      for(var i = 0; i < this.inputs.length;i++){
        this.weights[i] = getRandomIntInclusive(-1,1)
        this.sum += this.inputs[i] * this.weights[i]
      }
  }

  activation(){
      if(this.sum >= 0){
          this.output = 1
      }
      else{
          this.output = -1
      }
  }

}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}