"use strict";

const setDate = new Date(2022, 5, 1, 20); // '2022-06-01' від 1970-01-01 00:00:00.001
// new Date.parse('2022-06-01'); // парсінг строки в дату
const now = new Date();

console.log(setDate);

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());


console.log(now.getTimezoneOffset());
console.log(now.getTime());

// установка дати часу
console.log(now.setHours(18));

// приклад невеликого принципу бенчмарку
let start = new Date();

for (let i=0; i < 100000; i++) {
    let some = i ** 3; // ** - взведення в ступінь
}

let end = new Date();

console.log(`Цикл відпрацював ${end - start} мсек`);