"use strict";
//
// Arrey
//
// Задача 1
/*
Заполните новый массив (result) числами из старого (arr). 
Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
Должен получиться точно такой же массив
*/
function firstTask() {
    
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++){
        result[i] = arr[i];
    }
    console.log(result);

    return result;
}
//
// Задача 2
/*
Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
Для определения типа данных используйте typeof();
Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]
*/
function secondTask() {

    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i = 0; i < data.length; i++){
        if (typeof(data[i]) !== 'string'){
            data[i] = data[i] * 2;
        } else data[i] = `${data[i]} - done`;
    }
    console.log(data);
    
    return data;
}
//
// Задача 3
/*
Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]
*/
function thirdTask() {

    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = 1; i <= data.length; i++){
        result[i - 1] = data[data.length - i];
    }
    console.log(result);

    return result;
}
//
// Christmas tree
/*
Это одна из классических задач в программировании на формирование самых разных фигур при помощи кода. 
Вы спросите, а зачем это вообще нужно? Ответов несколько:
Существуют реальные задачи, когда вы кодом строите геометрию, символы и другие нужные вещи.
Вспомните простые электронные табло на улицах, например
Это хорошо прокачивает логику и разминает мозг

Позволяет запомнить нюансы работы языка
Иногда можно встретить просто нереальные вещи, построенные только при помощи кода. 
Но мы с вами займемся базовой фигурой. 
Сейчас вам необходимо написать код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:

              *
             ***
            *****
           *******
          *********
         ***********
*/
const lines = 5;
let result = '';
// ����������� ������ ���������� result, ���������� ������ � ���
for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}
console.log(result);

////////////////////////////////////////////////////////////////////////
//
/*
Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. 
(Смотри пример ниже). 
Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". 
После последнего числа их не должно быть.

Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

Примеры:
Вызов функции getMathResult(5, 3) даст ответ 5---10---15
Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30
Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50
Вызов функции getMathResult(10, '5') даст ответ 10
Вызов функции getMathResult(10, 0) даст ответ 10
Вызов функции getMathResult(20, -5) даст ответ 20

Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов, проверять их и продумывать логику работы внутри. 
Обратите внимание на прогрессию, она рассчитывается по простой формуле умножения. 
Если первый аргумент 5, а второй 3, то число повторяется 3 раза, каждый раз увеличиваясь на само себя. 
Это базовая математика, которая и нужна для работы в 95% случае на фронтенде.
*/

function getMathResult(a, b) {
    let str = '';
    if (typeof b === 'number' && b >= 1 ){
        for (let i = 1; i <= b; i++) {
             
            str += `${a * i}`;
            if (i !== b){
                str += '---';
            } 
        }
    } else {
        str = `${a}`;
    }
    return str;
}

console.log(getMathResult(5, 10));

/*
1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). 
Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.
Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"
*/

function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }
    const V = length*length*length;
    const S = 6*(length*length);

    return `Объем куба: ${V}, площадь всей поверхности: ${S}`;
}

console.log(calculateVolumeAndArea(5));

/*
2) Постепенно переходим к более реалистичным задачам :) Вы обнаружите, что там используется все тоже самое.
Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:
*/

function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(seatNumber / 4);
}

console.log(getCoupeNumber(5));

////////////////////////////////////////////////////////////////////////


/*
1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). 
Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. 
Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). 
Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). 
Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). 
Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

Пример:
getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
getTimeFromMinutes(-150) => "Ошибка, проверьте данные"*/

function getTimeFromMinutes(min) {
    if (typeof(min) !== 'number' || min < 0 || !Number.isInteger(min)) {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(min / 60);
    const minutes = min % 60;

    let hoursStr = '';

    switch (hours) {
        case 0: 
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }
    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

console.log(getTimeFromMinutes(500));

/*
2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. 
Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

Пример:
findMaxNumber(1, 5, 6.6, 11); =>  11
findMaxNumber(1, 5, '6', '10');  =>  0

У этой задачи есть очень много вариантов решения, в том числе и встроенное в JS. Подходит любое :)
*/

function findMaxNumber(a, b, c, d) {
    if (typeof(a) !== 'number' ||
    typeof(b) !== 'number' ||
    typeof(c) !== 'number' ||
    typeof(d) !== 'number') {
    return 0;
} else {
    return Math.max(a, b ,c, d);
}
}

console.log(findMaxNumber(3, 4, 1.20, 7));

/*
Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. 
Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. 
Причем, их количество должно быть равно переданному аргументу.

Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

Пример:
fib(4) => ''0 1 1 2"
fib(7) => ''0 1 1 2 3 5 8"
fib('7') => ''"
fib(1) => "0"
fib(0) => ''"
*/

function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first}, `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}

console.log(fib(5));

////////////////////////////////////////////////////////////////////////

//
// Задачі на роботу з об'єктами
/*
1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

Пример:
showExperience(personalPlanPeter) => '1 month'

P.S. желательно использовать деструктуризацию, но не обязательно
*/

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};
personalPlanPeter.showAgeAndLangs(personalPlanPeter);

/*
2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

Пример:
showProgrammingLangs(personalPlanPeter)  =>
"Язык js изучен на 20% Язык php изучен на 10%"

Причем функция должна работать вне зависимости от количества языков. 
Если ни один не указан, то возвращается пустая строка.

P.S. Для переноса строки используется \n в конце строки.
*/
function showExperience(plan) {
    const {exp} = plan.skills;
    //console.log(exp);
    return exp;
}

showExperience(personalPlanPeter);

/*
3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. 
При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

Пример:
personalPlanPeter.showAgeAndLangs(personalPlanPeter)
=> 'Мне 29 и я владею языками: RU ENG'

Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). 
Если данные в объекте поменяются, то и сообщение тоже изменится.

P.S. Дальше по курсу мы научимся удобно обращаться из метода к самому объекту, в котором он расположен. Но пока делаем это менее удобным способом)
*/
function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return str;
}
showProgrammingLangs(personalPlanPeter);

////////////////////////////////////////////////////////////////////////
//
// Задачі на роботу з масивами
/*
1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'
*/
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// з вкористанням циклу for
function showFamily(arr) {
    const arrIn = [...arr];
    let str = `Сім'я складаться з: `;
    for (let key in arrIn) {
        str += arrIn[key] + ' ';
    }
    return str;
}

// з використанням умовного оператора та циклу forEach
function showFamily(arr) {
    let str = '';
    arr.length === 0 ? str = "Сім'я пуста" : str = "Сім'я складається з: ";
    arr.forEach(member => {
        str += `${member} `;
    });
    return str;
}

console.log(showFamily(family));

/*
2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.

Пример:

standardizeStrings(favoriteCities)  выведет в консоль

lisbon
rome
milan
dublin
Это частая задача в реальности, так как от пользователя нам могут прийти ответы в самых разных форматах. 
В том числе и с разными буквами :) Поэтому нам нужно привести строки в один формат для правильной работы.
*/

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase());
    });
}

standardizeStrings(favoriteCities);

/*
3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.

Пример:

const someString = 'This is some strange string';
reverse(someString) => 'gnirts egnarts emos si sihT'

Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"

Это очень интересная задача, которую можно решить несколькими способами. Её дают для того, чтобы оценить навыки и знания программиста, посмотреть как он думает. Как небольшая подсказка, есть метод, который может вам помочь. И часть дополнительных вариантов решения мы тоже изучим в течении курса.

Может показать сложной с первого взгляда, но это совсем не так 🙂
*/

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) != 'string') {
        return 'Помилка!';
    }
//    return str.split('').reverse().join('');

    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--){
        newStr += str[i];
    }
    return newStr;
}

console.log(reverse(someString));

/*
4) Представьте такую реальную ситуацию. 
У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. 
Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: 
первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), 
второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. 
Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. 
Функция возвращает строку в нужном виде.

Пример:

availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
Вернет строку:

Доступные валюты:
UAH
RUB
Заметьте:

- CNY (юань) исчез из списка валют, значит такая валюта закончилась
- После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов
- Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку
*/

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    // Або через цикл for
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    return str;
}

console.log (availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));

////////////////////////////////////////////////////////////////////////
//
// 
// ����������-��������� �����������\
// 
const soldier = {
    health: 400,
    armor: 100,
    action: function (){
        console.log('Say Hello!');
    }
};

// ��������� ��'���� �� ���������
const John = Object.create(soldier);
John.action();

const Michael = {
    age: 25
};

// ����������� ������ ��'���� �����
Object.setPrototypeOf(Michael, soldier);
Michael.action();

/*
У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. 
Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.

Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. 
Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'. 
И все 🙂

Но эта задача содержит несколько подзадач внутри:
- вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;
- вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;
- определение того, хватает ли бюджета на оплату такого объема;
- все числа идут без единиц измерения для упрощения, просто цифры и все;
- функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект.
*/

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let square = 0;
    let volume = 0;

    data.shops.forEach(shop => {
        square += shop.width * shop.height;
    });

    volume = data.height * square;

    if (data.budget - (volume * data.moneyPer1m3) >= 0) {
        return `Бютдету достатньо`;
    } else {
        return `Бютжету не достатньо`;
    }
}
console.log(
            isBudgetEnough(shoppingMallData)
);
// 
/*
У вас есть список учеников, которые хотят поиграть в игру:

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

Внутри она сначала сортирует имена по алфавиту. 
Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. 
Эти группы должны быть массивами. 
Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

Пример:

sortStudentsByGroups(students)  =>

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi'
]
Если убрать одно студента из списка, то результат будет:

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: -'
]
А если добавить одного, то:

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi, Somebody'
]
То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.

Задача интересная, немного заковыристая, но все необходимое для неё мы уже проходили. Просто распишите логику действий строка за строкой.
*/
//
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();

    const a = [], 
          b = [],
          c = [],
          rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }      
    return [a, b, c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
}

console.log(sortStudentsByGroups(students));

////////////////////////////////////////////////////////////////////////
//
function factorial (n) {
    if (typeof(n) !== 'number' || !Number.isInteger(n)) {
        return "Error data type!";
    }
/*
    if (n >= 1) {
        return n * factorial(n - 1);
    } else {
        return 1;
    }
*/
    return (n >= 1) ? (n * factorial(n - 1)) : 1;
}

console.log(
    factorial(4)            // 4! = 4 * 3 * 2 * 1 = 24
);

/*
(**) Сложная задача на вычисление количества страниц

Задание:

В каждой книге есть n страниц с номерами страниц от 1 до n. Написать функцию amountOfPages,
аргумент которой summary составляется путем сложения количества цифр всех номеров страниц.
Эта функция возвращает число - количество страниц n в книге. 
Чтобы было понятно что такое количество цифр, давайте рассмотрим примеры.

Пример:
Если на входе функции summary = 25, то на результат должен быть 17. Всего в числах от 1 до 17 содержится 25 цифр: 1234567891011121314151617.
Функция на вход как раз принимает это общее количество цифр, а возвращает конечное число, то есть последнюю страницу книги.

        amountOfPages(5) => 5
        amountOfPages(25) => 17
        amountOfPages(1095) => 401   
        amountOfPages(185) => 97
*/

function amountOfPages(summary){
    let res = '';
    let n = 0;

    for (let i = 1; i <= summary; i++) {
        res += i;
        if (res.length === summary) {
            n = i;
            break;
        }
    }
    return n;
}

console.log(amountOfPages(25));

// (**) Сложная задача на работу со строками
/*
Панграмма — это предложение, в котором каждая буква алфавита встречается хотя бы по одному разу без повторений. 
Например, предложение «The quick brown fox jumps over the lazy dog» является панграммой, поскольку в нем хотя бы один раз используются буквы от A до Z (регистр значения не имеет).

Напишите функцию isPangram, которая принимает в себя строку и возвращает логическое значение. Если строка является панграммой - вернется true, если нет - false.

Пример:

isPangram(«The quick brown fox jumps over the lazy dog») => true
isPangram(«Hello world») => false

P.S. Эта задача имеет много вариантов решения, часть из которых использует возможности, которые мы будем проходить дальше по курсу. Но и без них можно это сделать.
*/

// Вариант, когда строка переводится в нижний регистр до всех операций только 1 раз
// Это должно экономить ресурсы компьютера
function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
}

// С другим методом и строка каждый раз преобразовывается в коллбэке
function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
}

// При помощи цикла
function isPangram(str) {
    letters: for (var c = 0; c < 26; c++) {
        for (let i = 0; i < str.length; i++) {
            let s = str.charCodeAt(i);
            if (s < 65 || s > 90 && s < 97 || s > 122) continue
            if (s === 65 + c || s === 97 + c) continue letters
        }
      
        return false
    }
    
    return true
}

// При помощи Set
function isPangram(string) {
    return new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
}

// С использованием регулярных выражений
function isPangram(string){
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}


// (**) Сложная задача на работу с рекурсией
/*
Задание:

Создайте функцию deepCount, которая будет считать количество всех элементов в массиве, включая и вложенные массивы. 
Учтите, что сам вложенный массив тоже входит в счет. Чтобы понять задачу детальнее, давайте рассмотрим примеры:

deepCount([1, 5, 3]) => 3
deepCount(["1", 5, "3", ["10"]]) => 5 (Заметьте, что последний элемент был посчитан сам + его внутренность)
deepCount([1, 2, [3, 4, [5]]]) => 7
deepCount([]) => 0
deepCount([[[[[[[[[]]]]]]]]]) => 8
*/

// Вариант с циклом
function deepCount(a){
    let count = a.length;
    for (let i = 0; i < a.length; i++) 
        if (Array.isArray(a[i]))
            count += deepCount(a[i]);
    return count;
}

// Вариант с методом reduce
function deepCount(a){
    return a.reduce((s, e) => s + (Array.isArray(e) ? deepCount(e) : 0),  a.length);
}

//
// Завдання на роботу з методами масивів
/*
1) У вас есть список фильмов с рейтингом в виде массива объектов. 
Напишите функцию showGoodFilms, которая будет принимать этот массив, а возвращать будет массив объектов только с теми фильмами, у которых рейтинг больше или равен 8.
2) Напишите функцию showListOfFilms, которая будет принимать этот же массив, а возвращать будет строку, которая содержит названия фильмов через запятую.

Пример:
showListOfFilms(films) => "Titanic, Die hard 5, Matrix, Some bad film"

3) Напишите функцию setFilmsIds, которая будет принимать этот же массив, а возвращать будет такой же массив с фильмами, но у каждого фильма будет новое поле id. 
Значение этого поля установите по нумерации фильма.

Пример:
setFilmsIds(films)  => [   { name: 'Titanic', rating: 9, id: 0 },   { name: 'Die hard 5', rating: 5, id: 1 },   { name: 'Matrix', rating: 8, id: 2 },   { name: 'Some bad film', rating: 4, id: 3 } ]

4) Запишите результат предыдущей функции в переменную tranformedArray. Напишите функцию checkFilms, которая будет проверять, что в каждом из фильмов есть поле id. 
Если это так - функция возвращает true. Очевидно, что сейчас условие должно выполняться, если мы передаем checkFilms(tranformedArray); :)

P.S. Вот тут вы столкнетесь с интересным моментом, который я хочу, чтобы вы запомнили. 
Внимательно проследите за тем, что происходит внутри коллбэка и что будет проверяться. 
Дополнительно расписал этот момент в комментариях в ответах.
P.S. Это довольно типичная задача в программировании. Вспомните, на самых разных сайтах можно так фильтровать любые товары/фильмы/сериалы...
*/
const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter(obj => obj.rating >= 8);
}
console.log(showGoodFilms(films));

function showListOfFilms(arr) {
    return arr.reduce((sum, current) => `${typeof(sum) === 'object' ? sum.name : sum}, ${current.name}`);
}
console.log(showListOfFilms(films));

function setFilmsIds(arr) {
    return arr.map((film, i) => {
        film.id = i;
        return film;
    });
}
console.log(setFilmsIds(films));

const tranformedArray = setFilmsIds(films);

// При срабатывании every на первом фильме он натыкается на id = 0;
// 0 - это неправда в логическом ключе, поэтому и весь метод возвращает false
// Учитывайте этот момент
function checkFilms(arr) {
    return arr.every(film => film.id || film.id === 0 ? true : false);
}


// Еще короче, так как условие все равне вернет true или false:
// function checkFilms(arr) {
//     return arr.every(film => film.id || film.id === 0)
// }

// Максимально коротко, но еще читаемо:
// const checkFilms = (arr) => arr.every(film => film.id || film.id === 0)

console.log(checkFilms(films));

/*
1) У вас есть небольшой массив с данными о доходах каждой торговой точки. 
Напишите функцию getPositiveIncomeAmount, которая принимает этот массив данных и возвращает сумму только положительных значений из каждого объекта. (число)

Пример:
getPositiveIncomeAmount(funds) => 13300

2) Напишите функцию getTotalIncomeAmount, которая тоже принимает этот массив данных. 
Если хотя бы один из объектов содержит отрицательное значение поля amount, то функция возвращает сумму всех значений. (число) 
Если таких значений нет - запускается функция getPositiveIncomeAmount с тем же массивом данных.

Пример:
getTotalIncomeAmount(funds) => -500
*/
const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    return data.filter(item => item.amount > 0).reduce((sum, current) => sum + current.amount, 0);
};
console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
    return data.some(item => item.amount < 0) ? data.reduce((sum, current) => sum + current.amount, 0) : getPositiveIncomeAmount(data);
};
console.log(getTotalIncomeAmount(funds));