watchlist = [
    {title: "Inception", genre: "Sci-Fi", watched: false },
    {title: "The Matrix", genre: "Sci-Fi", watched: true },
    {title: "Harry Potter and the Sorcerer's Stone", genre: "Family/Fantasy", watched: true },
    {title: "Harry Potter and the Chamber of Secrets", genre: "Family/Fantasy", watched: true }
]

function addMovie(title, genre) {
    watchlist.push({title, genre, watched: false});
}

function listMovies() {
    for(let i of watchlist){
        console.log(i);
    }
}

function getByGenre(genre) {;
    let genreMovie = [];
    for(let i in watchlist) {
        if(watchlist[i].genre == genre) {
            genreMovie.push(watchlist[i]);
        }
    }
    return genreMovie;
}
addMovie("Harry Potter and the Prisoner of Azkaban", "Family/Fantasy");
listMovies();
console.log(getByGenre("Family/Fantasy"));
console.log(watchlist);