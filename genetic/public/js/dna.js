class Dna {


  constructor(leng) {
    this.leng = leng 
    this.word = '                                                                            ' 
    
    this.target = "To be or not to be"
    this.score = 0
    this.correct = 0
    this.generation = 0
    this.characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ';
    this.charactersLength = this.characters.length;
  }

  randomWord(){
    this.word = ''

    for ( var i = 0; i < this.leng; i++ ) {
        
        this.word += this.characters.charAt(Math.floor(Math.random() * this.charactersLength))
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

  mutation(){
      for ( var i = 0; i < this.leng; i++ ) {

        if(this.word[i] == this.target[i]){
        }
        else if(Math.random() <=0.1){
            
        this.word = this.word.substr(0, i) + this.characters.charAt(Math.floor(Math.random() * this.charactersLength)) + this.word.substr(i + 1);
        //this.word[i] = this.characters.charAt(Math.floor(Math.random() * this.charactersLength))
        }
        
        
    }    
  }


}