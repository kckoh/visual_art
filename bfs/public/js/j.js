function Graph(value){
    this.value = value
    this.edges = []
    this.parent
    Graph.prototype.addNode = function (n){
        this.edges.push(new Graph(n))
    }

}

var data
var kevin
var movies= new Map()
var casts = new Map()
var actor, movie
var c = []
var s = []
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
            // adding graphs of casts to array
            c.push(new Graph(moviesList[i].cast[j]))
            // if casts already exist
            if(casts.has(moviesList[i].cast[j])){
                // add this new graph of movie title
                s.push(new Graph(movie))
                // adding what was already there
                casts.get(moviesList[i].cast[j]).forEach(element => s.push(element))
                casts.set(moviesList[i].cast[j],s)
                s = []
            }
            else{
                casts.set(moviesList[i].cast[j],[new Graph(movie)])
            }
        }
        
        // setting the movie titles with graphs of casts
        movies.set(movie, c)
        c = []
        
    }

    console.log(casts)
    console.log(casts.get("Kevin Bacon"))

    
}


function draw(){
    	

}


