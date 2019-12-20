class Perceptron {


  constructor() {
    this.inputs = []
    this.weights = []
    this.sum
    this.output  
    this.answer = []
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


  error(arg) {
      var answer
      if(arg[1] >= arg[0]){
          answer = -1
      }
      else{
          answer = 1
      }
      return answer - this.output
  }

  updateWeights(){
    var answer
    var error


      for(var i = 0; i < this.weights.length;i++){
          if(this.inputs[i][1] >= this.inputs[i][0]){
          answer = -1
            }
            else{
                answer = 1
            }

      error = answer - this.output
      console.log(error)
          if(error == 0 ){
               
          }
          else{
            this.weights[i] = this.weights[i] + error*this.inputs[i][0] *0.01
          }
      }
  }

}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}