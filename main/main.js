// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", "");

// const personalMovieDB = {
//     count : numberOfFilms,
//     movies : {},
//     actors : {},
//     genres : [],
//     private : false,
// };

// // const lastMovie1 = prompt("Один из позледних просмотренних фильмов ?", "Terminator"),
// //        rangeMovie1 = prompt("На сколько оцените его ?", "10.10"),
// //        lastMovie2 = prompt("Один из позледних просмотренних фильмов ?", "Terminator"),
// //        rangeMovie2 = prompt("На сколько оцените его ?", "10.10");

// // personalMovieDB.movies[lastMovie1] = rangeMovie1;
// // personalMovieDB.movies[lastMovie2] = rangeMovie2;

// for(let i = 0; i < 2;i++){
//     const lastMovie1 = prompt("Один из позледних просмотренних фильмов ?", "Terminator"),
//           rangeMovie1 = prompt("На сколько оцените его ?", "10.10");

//     if(lastMovie1 != null && rangeMovie1 != null && lastMovie1 != '' && rangeMovie1 != '' && lastMovie1.length < 50){
//         personalMovieDB.movies[lastMovie1] = rangeMovie1;
//         console.log('Done!');
//     }else{
//         console.log('Error');
//         i--;
//     }
// }
// if(personalMovieDB.count < 10){
//     console.log('Просмотренно довольно мало фильмов');
// }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//     console.log("Вы классический зритель");
// }else if(personalMovieDB.count >= 30){
//     console.log("Вы киноман");
// }else{
//     console.log("Произошла ошибка");
// }
// console.log(personalMovieDB);