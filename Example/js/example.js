"use strict";


// Callback function
//
function learnJS(lang, Callback) {
    console.log(`Я вивчаю ${lang}!`);
    Callback();
}

function done(){
    console.log('Я пройшов курс!');
}

learnJS('JavaScript', done);

// Методи в об'єктах та Диструктуризація об'єктів
//
const option = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    // метод в середині об'єкту
    makeTest: function() {
        console.log('����� ����');
    }
};

option.makeTest();      // виклик методу з об'єкту 'option'

const {border, bg} = option.colors;     // Диструктуризація 
console.log(border);

// console.log(option.name);
// console.log(option['colors']['border']);

// Перебирання властивостей об'єкта
//
let counter = 0;
for (let key in option) {
    if (typeof(option[key]) === 'object') {
        for (let i in option[key]) {
            console.log(`Властивість: ${i}, має знаяення: ${option[key][i]}`);
        } 
    } else {
        console.log(`Властивість: ${key}, має значення: ${option[key]}`);
        counter ++;
    }
} 

console.log(`Масив імен об'єкта: ${Object.keys(option)}`);
console.log(`Кількість властивостей об'єкта: ${Object.keys(option).length}`);

console.log(`Кількість елементів в обєкті = ${counter}`);

//
// Масиви і псевдоніми
// 

const arr = [1, 2, 3, 5, 4];

arr.pop();       
arr.push(10);

console.log(arr.pop());

arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} � �������� ������ ${arr}`);
});

arr.sort(compareNum);       // сортування 
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// Посилання на об'єкт

const obj = {
    a: 5,
    b: 1
};

const link = obj; // посилання на об'єкт, але не його копія
link.a = 10;

console.log(obj);
console.log(link);

// Функція поверхневого копіювання структури, що передається
//
function copy (mainObj){
    let objCopy = {};
    let key;
    for (key in mainObj){
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

// Копіювання структури об'єкта, через виклик функції
//
const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10; // посилання на вкладений об'єкт

console.log(numbers);
console.log(newNumbers);

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add)); // призначення одного об'єкта іншому

// Створення нового об'єкта-клона
//
const clone = Object.assign({}, numbers);
clone.c.x = 20;

console.log(clone); // призначення одного об'єкта іншому

// Spread ... (ES6-ES9)
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejornal', 'blogger'],
      internet = [...video, ...blogs, 'facebook', 'twitter'];

console.log(internet);

// Передача ряду параметрів у фінкцію за допомогою оператора spread
//
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num); // ... - spread оператор

// 
// Замивання на лексичне середовище
// 

function createCounter() {
    let counter = 0;

    const myFuntion = function() {
        counter += 1;
        return counter;
    }
    return myFuntion;
}

const increment = createCounter();

console.log(typeof(increment));

const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);

// 
 function foo (a, b) {
    const [first] = a;
    const {eng} = b;
    return `${first} ${eng}`;
 }
 const rst = foo(['Hello', 'Привіт'], {ru: 'Світ', eng: 'World'});
 console.log(rst);