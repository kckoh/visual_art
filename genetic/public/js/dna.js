class Dna {


  constructor(leng) {
    this.leng = leng 
    this.word = ''
    this.result
    this.target = "To be or not to be"
    this.score = 0
    this.correct = 0
  }

  randomWord(){
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ';
    var charactersLength = characters.length;
    for ( var i = 0; i < this.leng; i++ ) {
        this.word += characters.charAt(Math.floor(Math.random() * charactersLength))
    }      
  }

  fitness(){
    for ( var i = 0; i < this.leng; i++ ) {
        if(this.target[i] == this.word[i] ){
            this.correct++
        }
        this.score = this.correct/18
    }      
  }

}