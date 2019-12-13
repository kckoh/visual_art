function Graph(value){
    this.value = value
    this.edges = []
    this.parent = null
    this.discovered = false
    Graph.prototype.addNode = function (n){
        this.edges.push(n)
    }
}

var sel
var item
var data
var kevin
var movies= new Map()
var casts = new Map()
var cast, movie
var moviesList
var resetArray = []
var para = []

// loading data
function preload(){
    data = loadJSON("./js/kevinbacon.json")
}

// a function which prints out the related movies and actors to reach kevin bacon
function run(){
    var stack = []
    var val = bfs(casts.get(sel.value()));
    
    while(val.parent !=null){
        stack.push(val)
        val = val.parent
    }
    stack.push(val)
    while(stack.length != 0){
        createP(stack.pop().value)
    }
    reset(resetArray)
    resetArray = []
    createP("----------------")
    
}

function setup() {
	//canvas
    noCanvas();
    createP("The object of the game is to start with any actor or actress who has been in a movie and connect them to Kevin Bacon in the smallest number of links possible")
    // for selecting actors
    sel = createSelect();
    sel.position(250, 60);

    // copy data
    moviesList = data.movies

    // for every actors make a graph and connect to movies
    for( var i = 0; i < moviesList.length;i++){
        movie = moviesList[i].title
        for( var j = 0; j < moviesList[i].cast.length;j++){
            cast = moviesList[i].cast[j]
            sel.option(cast);
            casts.set(cast, new Graph(cast))
        }
        movies.set(movie, new Graph(movie) )
    }

    // for every movies make graphs and connect to actors
    for( var i = 0; i < moviesList.length;i++){
        movie = moviesList[i].title
        for( var j = 0; j < moviesList[i].cast.length;j++){
            casts.get(moviesList[i].cast[j]).addNode(movies.get(movie))
            movies.get(movie).addNode(casts.get(moviesList[i].cast[j]))
        }
    }

    // if seleciton is selected, run this funciton
    sel.changed(run)
    
}


// actoural breath first search alogorithm
function bfs(start_v){
    resetArray.push(start_v)
    var q = []
    start_v.discovered = true
    var v;
    var goal = "Kevin Bacon"
    q.push(start_v)
    var array1
    while (q.length != 0) {
        v = q.shift()
        if (v.value == goal){
            return v
            
        }
            array1 = v.edges;
            array1.forEach(element => {
                if(element.discovered == false){
                    element.discovered = true
                    element.parent = v
                    q.push(element)
                    resetArray.push(element)
                }
            });
    }
}

// reset the discovered and parent
function reset(arr){
    arr.forEach(element => {
        element.discovered = false
        element.parent = null
        }
    )
}



