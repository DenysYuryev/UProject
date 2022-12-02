"use strict";

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

// конвертація об'єкту в карту
const userMap = new Map(Object.entries(user));
console.log(userMap);

// конвертація карти в об'єкт
const userObject = Object.fromEntries(userMap);
console.log(userObject);

console.log(typeof(Object.keys(user)[0]));  // тип даних параметрів структури

const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];

const budget = [5000, 15000, 25000];

// const map = new Map();

const map = new Map([
    [{paper: 400}, 8000]
]);

// set - метод 
map.set(shops[0], 5000)    // пітримка  послідовного присвоювання 
   .set(shops[1], 15000)    
   .set(shops[2], 25000);

shops.forEach((shop, i) => {    // присвоєння через forEach
    map.set(shop, budget[i]);
});

console.log(map);

console.log(map.get(shops[0])); // get - метод, отримати дані
console.log(map.has(shops[0])); // has - перевірка на наявність
 
// map.delete(key);
// map.clear();
// map.size;

// map.keys(); // повертає ітерований об'Єкти через ключ

const goods = [];

for (let shop of map.keys()) {
    goods.push(Object.keys(shop)[0]);
    console.log(shop);
}
console.log(goods);

for (let price of map.values()) {
    console.log(price);
}

for (let price of map.entries()) {
    console.log(price);
}

// деструктуризація
for (let [shop, price] of map.entries()) {
    console.log(price);
}

map.forEach((value, key, map) => {
    console.log(key, value);
});

// Приклад з автоматичним очищенням (збірник сміття)
let userNew = {name: 'Ivan'};
let mapNew = new WeakMap();
mapNew.set(userNew, 'data');

userNew = null;

console.log(mapNew);

// Приклад з відсіюваннням offline users
// очистка пам'яті WeakMap
let cache = new WeakMap();

function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now());
    }

    return cache.get(user);
}

let lena = {name: 'Elena'};
let alex = {name: 'Alex'};

cacheUser(lena);
cacheUser(alex);

lena = null; // вийшла з чату

console.log(cache.has(lena));
console.log(cache.has(alex));

// WeakSet (тільки для об'єктів)
// add, has, delete

let messages = [
    {text: 'Mesage_1', from: 'John'},
    {text: 'Mesage_2', from: 'Alex'},
    {text: 'Mesage_3', from: 'Ann'}
];

let readMesages = new WeakSet();

readMesages.add(messages[0]);
readMesages.add(messages[1]);

readMesages.add(messages[0]);
messages.shift();
console.log(readMesages.has(messages[0]));

// 

const arr = [
    {
        name: 'Alex',
        salary: 500
    },
    {
        name: 'Ann',
        salary: 1500
    },
    {
        name: 'John',
        salary: 2500
    },
];
 
const result = arr.map(item => Object.entries(item)[1][1]).reduce((sum, curr) => sum + curr);
console.log(result);