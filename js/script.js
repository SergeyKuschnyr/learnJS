const numberOfFilms = +prompt('How many movies have you seen ?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privet: false
};

const a = prompt('What was the last movie you saw ?', ''),
    b = prompt('please rate this movie', ''),
    c = prompt('What was the last movie you saw ?', ''),
    d = prompt('please rate this movie', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

personalMovieDB.actors[1] = 'robbert de niro';
personalMovieDB.actors[2] = 'silvestr stalone';

console.log(personalMovieDB);
