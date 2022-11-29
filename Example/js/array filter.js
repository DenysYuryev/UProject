"use strict";
//
// filter 
//
const names = ['Ivan', 'Anna', 'Ksenia', 'Vasya', 'Petya'];

const shortNames = names.filter(function(name) {
    return name.length < 5;
});

console.log(shortNames);
//
// map
//
const answers = ['IvAn', 'AnnA', 'Hello', '123'];

const result = answers.map(item => {
    return item.toLocaleLowerCase();

});

console.log(result);
//
// every/some
//
const some = [4, 'qwerty', 'string'];
console.log(some.some(item => typeof(item) === 'number'));  // якщо хоча б один елемент число => true
console.log(some.every(item => typeof(item) === 'number')); // якщо всі елементи число => true
//
// reduce
//
const arr = [4, 5, 1, 3, 2, 6];
// 0   4
// 4   5
// 9   1
// 10  3
// 13  2
// 15  6
// 21                                                   > початкове значення 3
const res = arr.reduce((sum, current) => sum + current, 3);
console.log(res);

// массив в строку
const arrProduct = ['apple', 'pear', 'plum'];
const resProduct = arrProduct.reduce((sum, current) => `${sum},  ${current}`);
console.log(resProduct);

// комбінація методів фільтрації
const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArray = Object.entries(obj)   // перетворення об'єкту в масив масивів
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArray);