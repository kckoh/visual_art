class Perceptron {


  constructor() {
    this.inputs = []
    this.weights = []
    this.sum
    this.output  
    this.answer = []
    this.error
    this.guess
  }


  addInputs(array){
    this.inputs = array

  }

  answer(){
    for(var i = 0; i < this.inputs.length;i++){
          if(this.inputs[i][1] >= this.inputs[i][0]){
                this.answer[i] = -1
            }
            else{
                this.answer[i] = 1
            }
      }
  }

  initialWeights(){
        this.sum = 0
      for(var i = 0; i < this.inputs.length;i++){
        this.weights[i] = getRandomIntInclusive(-1,1)
        console.log(this.weights[i])
        this.sum += this.inputs[i][0] * this.weights[i]
      }
  }

  sumWeights(){
      this.sum = 0
      for(var i = 0; i < this.inputs.length;i++){
        this.sum += this.inputs[i][0] * this.weights[i]
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


  updateWeights(){



      for(var i = 0; i < this.weights.length;i++){
          if(this.inputs[i][1] >= this.inputs[i][0]){
                this.guess = -1
            }
            else{
                this.guess = 1
            }

      this.answer = this.guess - this.output
      //console.log(this.answer)
      if(this.error ==0){
          //console.log(i)
      }
      else{
          this.weights[i] +=  this.error*this.inputs[i][0]*0.01
      }
      
      }
  }

}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);


  return Math.random() * (+max - +min) + +min 
}