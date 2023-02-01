"use strict";

const numberOfMuvies = +prompt('Скільки фільмів Ви вже подивились?', '');

const personalMoviesDB = {
    count: numberOfMuvies,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
/*
const a = prompt('Один з останніх переглянутих фільмів?', ''),
      b = prompt('На скільки можете його оцінити?', ''),
      c = prompt('Один з останніх переглянутих фільмів?', ''),
      d = prompt('На скільки можете його оцінити?', '');

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);
*/
// Movies 

for (let i = 0; i < 2; i++) {
    const a = prompt('Один з останніх переглянутих фільмів?', ''),
          b = prompt('На скільки можете його оцінити?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMoviesDB.movies[a] = b;
        console.log('Done!');
    } else {
        console.log('Error!');
        i--;
    }
}

if (personalMoviesDB.count < 10) {
    console.log("Переглянуто доволі мало фільмів.");
} else if (personalMoviesDB.count > 10 && personalMoviesDB.count < 30) {
    console.log("Переглянуто не мало фільмів");
} else if (personalMoviesDB.count >= 30) {
    console.log("Ви кіноман!");
} else {
    console.log("Щось пішло не так...");
}

console.log(personalMoviesDB);