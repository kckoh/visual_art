function Graph(value){
    this.value = value
    this.edges = []
    Graph.prototype.addNode = function (n){
        this.edges.push(new Graph(n))
    }

}

var data
var kevin
var movies= new Map()
var actor, movie
var c = []
var moviesList
function preload(){
    data = loadJSON("./js/kevinbacon.json")
    
    


}

function setup() {
	//canvas
    noCanvas();

    moviesList = data.movies

    for( var i = 0; i < moviesList.length;i++){
        movie = moviesList[i].title
        for( var j = 0; j < moviesList[i].cast.length;j++){
            c.push(moviesList[i].cast[j])
        }
        
        movies.set(movie, c)
        c = []
        
        
    }
    console.log(movies)

    
}


function draw(){
    	

}


