"use strict";

const numberOfMuvies = +prompt('������ ������ �� ��� ����������?', '');

const personalMoviesDB = {
    count: numberOfMuvies,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
/*
const a = prompt('���� � ������� ������������ ������?', ''),
      b = prompt('�� ������ ������ ���� �������?', ''),
      c = prompt('���� � ������� ������������ ������?', ''),
      d = prompt('�� ������ ������ ���� �������?', '');

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);
*/
// Movies 

for (let i = 0; i < 2; i++) {
    const a = prompt('���� � ������� ������������ ������?', ''),
          b = prompt('�� ������ ������ ���� �������?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMoviesDB.movies[a] = b;
        console.log('Done!');
    } else {
        console.log('Error!');
        i--;
    }
}

if (personalMoviesDB.count < 10) {
    console.log("����������� ����� ���� ������.");
} else if (personalMoviesDB.count > 10 && personalMoviesDB.count < 30) {
    console.log("����������� �� ���� ������");
} else if (personalMoviesDB.count >= 30) {
    console.log("�� ������!");
} else {
    console.log("���� ���� �� ���...");
}

console.log(personalMoviesDB);