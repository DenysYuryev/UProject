"use strict";

const number = 1;
// анонімна самовизивна функція
(function() {
    let number = 2;
    console.log(number);
    console.log(number + 3);
}());

console.log(number);


const user = (function() {
    const privat = function() {
        console.log("Privat function!");
    };

    return {
        callFun: privat
    };
}());

user.callFun();