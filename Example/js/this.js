"use strict";

// 1) звичайна функція без "use sctrict" повертає window, або без нього - undefined
//
function showThis (a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());

}

showThis(4, 5);

// 2) контекст у методів об'єкта - сам об'єкт
//
const obj = {
    a: 20,
    b: 15,
    sum: function() {
        function shout() {
            console.log(this);
        }
        shout();
    }
};

obj.sum();

// 3) this в конструкторах і класах - це новий екземпляр об'єкта
//
function User(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.salutation = function() {
        console.log(`Hello ${name}`);
    };
}
let ivan = new User('Ivan', 23);

// 4) ручна привязка this: call, apply, bind
//
function sayName(surname) {
    console.log(this);
    console.log(this.name + " "+ surname);
}

const user = {
    name: 'John'
};

sayName.call(user, "Smith"); // аргуманти передаються через a, b, c
sayName.apply(user, ['Smith']); // аргуманти передаються через масив [a, b, c]

function count(num) {
    return this * num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(12));

// 5) стрілочні фунції не маючи свого контекту визову, звертаються до батьківського контексту виклику
//
const object = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
        };
        say();
    }
};
object.sayNumber();

//
const double1 = (a) => {
    return a * 2;
};
// або 
const double2 = a => a * 2;