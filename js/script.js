const numberOfFilms = +prompt('Whot many film you wotch ?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privet: false
};

const a = prompt('Whoch last wotch your film ?', ''),
    b = prompt('Give him reiting', ''),
    c = prompt('Whoch last wotch your film ?', ''),
    d = prompt ('Whoch last wotch your film ?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
