"use strict";

const persone = {
    name: "Alex",
    age: 25,

    get usrAge() {
        return this.age;
    },

    set usrAge(num) {
        this.age = num;
    }
};

console.log(persone.usrAge);    // отримання age
console.log(persone.usrAge = 30);    // запис age
