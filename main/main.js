const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", "");

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    private : false,
};

const lastMovie1 = prompt("Один из позледних просмотренних фильмов ?", "Terminator"),
       rangeMovie1 = prompt("На сколько оцените его ?", "10.10"),
       lastMovie2 = prompt("Один из позледних просмотренних фильмов ?", "Terminator"),
       rangeMovie2 = prompt("На сколько оцените его ?", "10.10");

personalMovieDB.movies[lastMovie1] = rangeMovie1;
personalMovieDB.movies[lastMovie2] = rangeMovie2;

console.log(personalMovieDB);