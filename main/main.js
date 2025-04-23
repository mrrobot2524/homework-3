let numberOfFilms;

function star(){
    let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", "");
    while(numberOfFilms == ''|| numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", "");
    }
}

star()

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    private : false,
};


function remeberMyFilms(){
    for(let i = 0; i < 2;i++){
        const lastMovie1 = prompt("Один из позледних просмотренних фильмов ?", "Terminator").trim(),
              rangeMovie1 = prompt("На сколько оцените его ?", "10.10").trim();
    
        if(lastMovie1 != null && rangeMovie1 != null && lastMovie1 != '' && rangeMovie1 != '' && lastMovie1.length < 50){
            personalMovieDB.movies[lastMovie1] = rangeMovie1;
            console.log('Done!');
        }else{
            console.log('Error');
            i--;
        }
    }
}

// remeberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log('Просмотренно довольно мало фильмов');
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы классический зритель");
    }else if(personalMovieDB.count >= 30){
        console.log("Вы киноман");
    }else{
        console.log("Произошла ошибка");
    }
}

// detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres(){
    for (let i = 1; i <= 3; i++){
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenres();