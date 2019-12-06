class Dna {


  constructor(leng) {
    this.leng = leng 
    this.word = []
    
    this.target = "To be or not to be"
    this.score = 0
    this.correct = 0
    this.generation = 0
  }

  randomWord(){
      this.word = ''
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ';
    var charactersLength = characters.length;
    for ( var i = 0; i < this.leng; i++ ) {
        
        this.word += characters.charAt(Math.floor(Math.random() * charactersLength))
    }      
  }

  fitness(){
    this.correct = 0
    if(this.score ==1){
        
    }
    else{
        for ( var i = 0; i < this.leng; i++ ) {
        if(this.target[i] == this.word[i] ){
            this.correct++
        }
    }
    this.score = this.correct/18
    this.generation++
    }      
  }

  match(){
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ';
    var charactersLength = characters.length;
      for ( var i = 0; i < this.leng; i++ ) {

        if(this.word[i] == this.target[i]){
        }
        else{
            this.word[i] = characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        
    }    
  }


}