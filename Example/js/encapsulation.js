'use strict';

// інкапсуляція у функціїї

function user(name, age) {
    this.name = name;
    this.age = age;

    let userAge = age;      // 

    this.say = function() {
        console.log(`Ім'я користувача: ${this.name}, вік ${this.age}`);     // без інкапсуляції
        console.log(`Ім'я користувача: ${this.name}, вік ${userAge}`);      // з інкапсулцією через змунні типу let
    };

    this.getAge = function() {
        return userAge;
    };

    this.setAge = function(age) {
        if (typeof(age) === 'number' && age > 1 && age < 110) {
            userAge = age;
        } else {
            console.log('Недопустиме зачення!');
        }
    };
}

const ivan = new user('Ivan', 27);
console.log(ivan.name);
console.log(ivan.age);
console.log(ivan.getAge());       


// можливість зміни даних ззовні
ivan.name = 'Alex';
ivan.age = 30;

console.log(ivan.name);
console.log(ivan.getAge()); // вивід 

ivan.setAge(40);
ivan.setAge(400);
console.log(ivan.getAge());

ivan.say();

//
// інкапсуляція в класі
//
class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Юр\'єв';        // властивість класу, що записується в об'єкт без конструктора "#" - скритий параметр (приватна властивість)

    say = () => {
        console.log(`Им'я користувача: ${this.name} ${this.#surname}, вік ${this._age}`);
    }

    // доуступ до скрититих приватних властивостей
    get surName() {
        return this.#surname;
    }

    set surName(surname) {
        if (typeof surname === 'string' && surname.length < 15) {
            return this.#surname = surname;    
        } else {
            return console.log('Недопустиме значення!');
        }
    }

    // доступ до властивостей конструктора
    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустиме значення!');
        }
    }
}

const userName = new User('Денис', 37);

console.log(userName.surName);
userName.surName = 'Smith';
console.log(userName.surName);

console.log(userName.age);
userName.age = 99;
console.log(userName.age);

userName.say();


