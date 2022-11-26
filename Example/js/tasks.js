"use strict";
//
// Arrey
//
// ������ 1
/*
��������� ����� ������ (result) ������� �� ������� (arr). 
���������� ��������� � ������� ����� �������� ��� arr.length, � � ��������� ���������� ��� ��� ��: arr[0], arr[1] � ��.
������ ���������� ����� ����� �� ������
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
// ������ 2
/*
�������� ������ ������ ���, ����� ��� ����� ���� ��������� � 2 ����, � ���� ���������� ������ ������ - �� � ��� ���� ��������� " - done".
��� ����������� ���� ������ ����������� typeof();
������ ����������: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]
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
// ������ 3
/*
���������� ������ data �������� ��� ������ ����� � �������� ������ � ������ result.
������ ����������: [ 'Homework', 20, 'Shopping', 10, 5 ]
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
������ ����� ��������� ������ ���������� ����, ����������� ������ ��� ������ ����. �� �� � ���� �������� ������� �������. 
������ ��� ���������� �������� ���, ������� ��� ������ ��������� (*) � ������� �������� ��� ����� ������:

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
// ������ �� ����� � ���������
/*
�������� �������, ������� ����� ��������� � ���� 2 ���������, ��� �����. ������ ����� - ��� ����, ������ ����� - ��� ������� ��� ����� ����� ��������� ��� ����� � ����������. (������ ������ ����). 
������� ������ ���������� ������ (��� ����� � ������ �������, � ������� ����), ��� ��� ����� ���� �� �������, ����������� ����� �������� "---". ����� ���������� ����� �� �� ������ ����.

���� ������ �������� �� �������� ������, ����� ��� ������ ���� - �� ���������� ������ ������ ��������. (��������� ����� �������� typeof)

�������:
����� ������� getMathResult(5, 3) ���� ����� 5---10---15
����� ������� getMathResult(3, 10) ���� ����� 3---6---9---12---15---18---21---24---27---30
����� ������� getMathResult(10, 5) ���� ����� 10---20---30---40---50
����� ������� getMathResult(10, '5') ���� ����� 10
����� ������� getMathResult(10, 0) ���� ����� 10
����� ������� getMathResult(20, -5) ���� ����� 20
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
1) �������� �������, ������� ����� ��������� ����� � ������� ������ ����������� ���� (���� ������� ����������, ������ ������������ � �������� ��������).
��� ������� ��������� � ���� ����� ����� �� ��������� ����� ����� ����. ����� �������� � ������� ������, ������� ��������� � ��������.
���� � ������� ����� ������������ �������� ��� ��������� �������� ���������� - ������� ������ "��� ���������� ��������� ������"
�� ����������� �������� ������� ** - � ������ ����� �������� �� �� �������� � ����� ����� ��������. ��� ��-�� ����, ��� ���� �������� �� ����� ������ ���������, ��� ��� ��������.
*/

function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "��� ���������� ��������� ������";
    }
    const V = length*length*length;
    const S = 6*(length*length);

    return `����� ����: ${V}, ������� ���� �����������: ${S}`;
}

console.log(calculateVolumeAndArea(5));

/*
2) ���������� ��������� � ����� ������������ ������� :) �� ����������, ��� ��� ������������ ��� ���� �����.
�������� �������, ������� ����� ���������� ����� ���� �� ����������� �� ������ �����. ��������:
*/

function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "������. ��������� ������������ ���������� ������ �����";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "����� ���� � ������ �� ����������";
    }

    return Math.ceil(seatNumber / 4);
}

console.log(getCoupeNumber(5));

////////////////////////////////////////////////////////////////////////


/*
1) �������� �������, ������� ��������� � ���� ����� ����� ����� � ���������� ����� � ������ ������� ������. (������ ������).
�������� �������� �� ��������� ����� "���" - ��� �������� � ����������� �� �����.
���� ������ ��������� �������� �� �����, ������� ��� ������������� ����� - ������� ���������� ������ "������, ��������� ������"
*/

function getTimeFromMinutes(min) {
    if (typeof(min) !== 'number' || min < 0 || !Number.isInteger(min)) {
        return "������, ��������� ������";
    }

    const hours = Math.floor(min / 60);
    const minutes = min % 60;

    let hoursStr = '';

    switch (hours) {
        case 0: 
            hoursStr = '�����';
            break;
        case 1:
            hoursStr = '���';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = '����';
            break;
        default:
            hoursStr = '�����';
    }
    return `��� ${hours} ${hoursStr} � ${minutes} �����`;
}

console.log(getTimeFromMinutes(500));

/*
2) �������� �������, ������� ��������� � ���� 4 ����� � ���������� ����� ������� �� ���. 
���� ���� �� ���������� �� �������� ������ ��� �� ������ 4 - ������������ 0. ������� ����� ���������.
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
�������� �������, ������� ����� ��������� � ���� ���� ��������-����� ������������� �����. 
��� ������ ���������� ������, � ������� ����� ����� ������ �������� ����� ���������. 
������, �� ���������� ������ ���� ����� ����������� ���������.
���� ���������� �������� �� ����� - ������� ������ ������. ������ ��� ���������� ��������.
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
            // ��� ������� � �����
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
// ������ � �����������������
/*
1) �������� ������� showExperience, ������� ����� ��������� � ���� ������ �� ����� ������� � ���������� ������ � ������.
������:
showExperience(personalPlanPeter) => '1 month'
P.S. ���������� ������������ ����������������, �� �� �����������
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
    // �����
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `��� ${age} � � ������ �������: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

function showExperience(plan) {
    const {exp} = plan.skills;
    //console.log(exp);
    return exp;
}

showExperience(personalPlanPeter);

/*
2) �������� ������� showProgrammingLangs, ������� ����� ��������� � ���� ������ �� ����� ������� � ���������� ������ � ������ ����.
������:
showProgrammingLangs(personalPlanPeter)  =>
"���� js ������ �� 20% ���� php ������ �� 10%"
������ ������� ������ �������� ��� ����������� �� ���������� ������. ���� �� ���� �� ������, �� ������������ ������ ������.
P.S. ��� �������� ������ ������������ \n � ����� ������.
*/

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `���� ${key} ������� �� ${programmingLangs[key]}\n`;
    }
    return str;
}
showProgrammingLangs(personalPlanPeter);

/*
3) �������� ����� showAgeAndLangs ������ ������� personalPlanPeter. 
   ��� ��� ������ ����� ����� ��������� � ���� ������ � ���������� ������ � ������ ����.
������:

personalPlanPeter.showAgeAndLangs(personalPlanPeter)
=> '��� 29 � � ������ �������: RU ENG'

��������, ��� ������� � ����� ������������� ������������� �� �������, � ����� ������ � ������� �������� (�������� �������).
���� ������ � ������� ����������, �� � ��������� ���� ���������.

P.S. ������ �� ����� �� �������� ������ ���������� �� ������ � ������ �������, � ������� �� ����������. �� ���� ������ ��� ����� ������� ��������)
*/

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

////////////////////////////////////////////////////////////////////////
//
// ������ �� ������ � ��������
/*
1) �������� ������� showFamily, ������� ����� ��������� � ���� ������ ����� � ���������� ��������� � ������ �������.
showFamily(family)  => '����� ������� ��: Peter Ann Alex Linda'
*/
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// �� ������������� ������
function showFamily(arr) {
    const arrIn = [...arr];
    let str = `?�'� ���������� �: `;
    for (let key in arrIn) {
        str += arrIn[key] + ' ';
    }
    return str;
}

// ������ �� ��������
function showFamily(arr) {
    let str = '';
    arr.length === 0 ? str = '����� �����' : str = '����� ������� ��: ';
    arr.forEach(member => {
        str += `${member} `;
    });
    return str;
}

console.log(showFamily(family));

/*
2) �������� ������� standardizeStrings, ������� ����� ��������� � ���� ������ ����� � ����� �������� � ������� ��� ������ � ������ ��������.

������:

standardizeStrings(favoriteCities)  ������� � �������

lisbon
rome
milan
dublin
��� ������ ������ � ����������, ��� ��� �� ������������ ��� ����� ������ ������ � ����� ������ ��������. 
� ��� ����� � � ������� ������� :) ������� ��� ����� �������� ������ � ���� ������ ��� ���������� ������.
*/

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase());
    });
}

standardizeStrings(favoriteCities);

/*
3) ������ � �������������. �������� ������� reverse, ������� ��������� � ���� ������ � ���������� ��� ������ � �������� �������.

������:

const someString = 'This is some strange string';
reverse(someString) => 'gnirts egnarts emos si sihT'

������� ����� ��������� � ����� ������. ���� � ������� �������� �� ������ - ������� ��������� "������!"
��� ����� ���������� ������, ������� ����� ������ ����������� ���������. 
? ���� ��� ����, ����� ������� ������ � ������ ������������, ���������� ��� �� ������. 
��� ��������� ���������, ���� �����, ������� ����� ��� ������. � ����� �������������� ��������� ������� �� ���� ������ � ������� �����.
����� �������� ������� � ������� �������, �� ��� ������ �� ��� ??
*/

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) != 'string') {
        return '������� ���� ����� (�� ������)!';
    }
//    return str.split('').reverse().join('');

    // �� ��������� ����� � ���������� 
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--){
        newStr += str[i];
    }
    return newStr;
}

console.log(reverse(someString));

/*
4) ����������� ����� �������� ��������. � ��� ���� ��������, ������� ������ ������ �� ���� ������ ������ � ������ �������. 
���� ���� �������� � �������� ��������, ������ �������������� � ������� ��������:

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
��� ����� ������� ������� ������� ��������� availableCurr, ������� ��������� ��� ���������: 
������ - ��� ������ �� ����� ���������� �������� �� ���� ������ ����� (������ ����������, ��� ��� �� ����� �����������), 
������ - �������������� ��������, ������� ��������� �� ������, ������� ������ ����������� � ���������. 
���� ������ � ������ ��������� ������ - �� ������� ���������� ������ '��� ��������� �����'. ������� ���������� ������ � ������ ����.

������:

availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
������ ������:

��������� ������:
UAH
RUB
��������:

- CNY (����) ����� �� ������ �����, ������ ����� ������ �����������
- ����� ������: ����� ������� ������ \n, � ����� ������ ������ ����. ��� ����� ��� ������
- ������ ��� ������� ��������� ������ ��������� ����� �� ���� ������, ������ ������� baseCurrencies, ����� additionalCurrencies �� �������
*/

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = '��� ��������� �����' : str = '��������� ������:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    // ���
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
������:

� ��� ���� ��������� ������� ������ � �������� ������, ������� �������� � ������� shoppingMallData. 
��� �������� ������ � ������� � ���������, ��� ������� ����� � ������ ���������; ������ ���������; ��������� ��������� �� 1 ���������� ���� � ������ �� ������ ��������� �� �����.

�������� ������ - ��� �������� ������� isBudgetEnough, ������� ���� ���������� ������. 
���� ������� ������� ��� ��������� ����� ������ ��������� ������ - ��������� '������� ����������', ���� ��� - '������� ������������'. 
� ��� ??

�� ��� ������ �������� ��������� �������� ������:
- ���������� ����� ������� ���� ���������, ������� ����������� ��� ����� ��������, ���������� �� ��� ������;
- ���������� ������ ������ ��������� ������, ��� ��� ���� ��������� ������� � ���������� ������;
- ����������� ����, ������� �� ������� �� ������ ������ ������;
- ��� ����� ���� ��� ������ ��������� ��� ���������, ������ ����� � ���;
- ������� ������ ���������� ��������, ���� ���� ���������� ���������� ���������, ������, ������ ��� ������������� ������ ������ ������.
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
        return `������� ���������`;
    } else {
        return `������� �� ���������`;
    }
}
console.log(
            isBudgetEnough(shoppingMallData)
);
// 
/*
������:

� ��� ���� ������ ��������, ������� ����� �������� � ����:

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

�� ������ ����� ���� ������ 3 �� 3 ��������. �������� ������� sortStudentsByGroups, ������� ��������� � ���� ������ �����.
������ ��� ������� ��������� ����� �� ��������. ����� ������������ �������� �� 3 �������� � 3 ������ �� ����������� �������. 
��� ������ ������ ���� ���������. ��� ����, ������� ���������� ����� ������ � ����� ��������� � ������� ��� 4� �������.

������:

sortStudentsByGroups(students)  =>

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  '���������� ��������: Takesi'
]
���� ������ ���� �������� �� ������, �� ��������� �����:

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  '���������� ��������: -'
]
� ���� �������� ������, ��:

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  '���������� ��������: Takesi, Somebody'
]
�� ����, �������� ���������� ������. ��� ���������� ������� �������� ����.

������ ����������, ������� ������������, �� ��� ����������� ��� �� �� ��� ���������. ������ ��������� ������ �������� ������ �� �������.
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
    return [a, b, c, `�������� �� ����������: ${rest.length === 0 ? '-' : rest.join(', ')}`];
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