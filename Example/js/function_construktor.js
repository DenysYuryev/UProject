"use strict";

function User(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.salutation = function() {
        console.log(`Hello ${name}`);
    };
}

User.prototype.exit = function() {
    console.log(`Користувач ${this.name} вийшов`);
};

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 25);

ivan.exit();

console.log(ivan);
console.log(alex);


