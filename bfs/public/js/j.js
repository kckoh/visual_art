function Graph(value){
    this.value = value
    this.edges = []
    this.parent
    this.discovered = false
    Graph.prototype.addNode = function (n){
        this.edges.push(n)
    }

}

var data
var kevin
var movies= new Map()
var casts = new Map()
var actor, movie,m
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
            // if casts already exist
            if(casts.has(moviesList[i].cast[j])){
                var m = new Graph(movie)
                // adding arrays for all casts except for this cast
               
                casts.get(moviesList[i].cast[j]).addNode(m)
           }
           else{
                var cast = new Graph(moviesList[i].cast[j])
                var m = new Graph(movie)
                // adding arrays for all casts
                cast.addNode(m)
                casts.set(moviesList[i].cast[j],cast)
                
           }
        }
    }

    console.log(casts.get("Kevin Bacon"))

    // var ex = new Graph(3)

    // var ex1 = new Graph(4)
    // var ex2 = new Graph(6)
    // var ex3 = new Graph(7)
    // var ex4 = new Graph(8)

    // ex.addNode(ex1)
    // ex1.addNode(ex2)
    // ex2.addNode(ex3)
    // ex2.addNode(ex4)
    // console.log(casts.get("Daniel Stern"))
    // bfs(ex)
    
    


    
}


function draw(){
    	

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
            console.log(v.value)
            return v.value
            
        }
            array1 = v.edges;
            array1.forEach(element => {
                if(element.discovered == false){
                    console.log(element)
                    element.discovered = true
                    element.parent = v
                    q.push(element)
                }
            });
    }
    

}


//  for( var i = 0; i < moviesList.length;i++){

//         movie = moviesList[i].title
//         for( var j = 0; j < moviesList[i].cast.length;j++){
//             // adding graphs of casts to array
//             c.push(new Graph(moviesList[i].cast[j]))
//             // if casts already exist
//             if(casts.has(moviesList[i].cast[j])){
//                 // add this new graph of movie title
//                 s.push(new Graph(movie))
//                 // adding what was already there
//                 casts.get(moviesList[i].cast[j]).forEach(element => s.push(element))
//                 casts.set(moviesList[i].cast[j],s)
//                 s = []
//             }
//             else{
//                 casts.set(moviesList[i].cast[j],[new Graph(movie)])
//             }
//         }
        
//         // setting the movie titles with graphs of casts
//         movies.set(movie, c)
//         c = []
        
//     }