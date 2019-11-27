

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
var c = []
var s = []
var moviesList


function preload(){
    data = loadJSON("./js/kevinbacon.json")
}


function run(){
    // var found = bfs(casts.get(sel.value()))
    // var stack = []
    // while(found.parent != null){
    //     stack.push(found)
    //     found = found.parent
    // }
    // stack.push(found)

    // while(stack.length !=0){
    //     createP(stack.pop().value)
    // }

    createP(sel.value())
    
}

function setup() {
	//canvas
    noCanvas();

    sel = createSelect();
    sel.position(250, 10);
    
    
    moviesList = data.movies

   

    for( var i = 0; i < moviesList.length;i++){

        movie = moviesList[i].title
        for( var j = 0; j < moviesList[i].cast.length;j++){
            cast = moviesList[i].cast[j]
            sel.option(cast);
            casts.set(cast, new Graph(cast))
        }
        movies.set(movie, new Graph(movie) )
    }

    for( var i = 0; i < moviesList.length;i++){
        movie = moviesList[i].title
        for( var j = 0; j < moviesList[i].cast.length;j++){
            casts.get(moviesList[i].cast[j]).addNode(movies.get(movie))
            movies.get(movie).addNode(casts.get(moviesList[i].cast[j]))
        }
    }

    
    sel.changed(run())

    
}




function bfs(start_v){
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
                }
            });
    }
    

}


