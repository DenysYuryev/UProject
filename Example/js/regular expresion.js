'use sctrict';

/*
new RegExp('pattern', 'flags');
/pattern/f
*/

// пошук
const ans = prompt("Введіть ваше ім'я");

const reg = /n/ig;

/* флаги
i - в незалежності регістру
g - (global) в незалежності від кількості входжень
m - багатостроковий режим
*/

console.log(ans.search(reg));   // search шукає тульки першу співпадіння 
console.log(ans.match(reg));    // match повертає масив 

// 
const pass = prompt('Password');

console.log(pass.replace(/./g, "*"));
console.log('12-32-56'.replace(/-/g, ":"));

// метод test
console.log(reg.test(ans));

/* класи регулярних виразів
\d - для пошуку цифр
\w - всі пробіли
\s - пробіли
*/
const regClass = /\d/ig;
console.log(ans.match(regClass)); 

//
const str = "My name is R1D2";
console.log(str.match(/\w\d\w\d/i)); // комбінація для вибірки R1D2

/*
/W - усі НЕ букви
/D - усі НЕ цифри
*/
console.log(str.match(/\W/ig));

// приклади
var re = /(\w+)\s(\w+)/;
var st = 'John Smith';
var newstr = st.replace(re, '$2, $1');
console.log(newstr); 

var text = 'Некоторый текст\nЕщё текст\r\nИ ещё\rЭто конец';
var lines = text.split(/\r\n|\r|\n/);
console.log(lines); // выведет [ 'Некоторый текст', 'Ещё текст', 'И ещё', 'Это конец' ]