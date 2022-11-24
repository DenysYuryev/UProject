"use strict";


// Callback function
//
function learnJS(lang, Callback) {
    console.log(`� ������ ${lang}!`);
    Callback();
}

function done(){
    console.log('� ������� ����!');
}

learnJS('JavaScript', done);

// ������ � ��'����� � ���������������� ��'���� 
//
const option = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    // ����� � ������� ��'����
    makeTest: function() {
        console.log('����� ����');
    }
};

option.makeTest();      // ������ ������ � ��'���� 'option'

const {border, bg} = option.colors;     // ���������������� 
console.log(border);

// console.log(option.name);
// console.log(option['colors']['border']);

// ����������� ������������ ��'����
//
let counter = 0;
for (let key in option) {
    if (typeof(option[key]) === 'object') {
        for (let i in option[key]) {
            console.log(`����������: ${i}, �� ��������: ${option[key][i]}`);
        } 
    } else {
        console.log(`����������: ${key}, �� ��������: ${option[key]}`);
        counter ++;
    }
} 

console.log(`����� ���� ��'����: ${Object.keys(option)}`);
console.log(`ʳ������ ������������ ��'����: ${Object.keys(option).length}`);

console.log(`ʳ������ �������� � ��'��� = ${counter}`);

//
// ������ � ����������
// 

const arr = [1, 2, 3, 5, 4];

arr.pop();       
arr.push(10);

console.log(arr.pop());

arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} � ������� ������ ${arr}`);
});

arr.sort(compareNum);       // ���������� 
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// ��������� �� ��'���

const obj = {
    a: 5,
    b: 1
};

const link = obj; // ��������� �� ��'���
link.a = 10;

console.log(obj);
console.log(link);

// ������� ������������ ��������� ���������� �� ����������
//
function copy (mainObj){
    let objCopy = {};
    let key;
    for (key in mainObj){
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

// ��������� ��������� ����� ������ �������
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
newNumbers.c.x = 10; // �� ��������� �� ���������� ��'���

console.log(numbers);
console.log(newNumbers);

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add)); // ����������� ��'���� ������ ������

// C�������� ������ ��'���� �����
//
const clone = Object.assign({}, numbers);
clone.c.x = 20;

console.log(clone); // ����������� ��'���� ������ ������

// Spread ... (ES6-ES9)
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejornal', 'blogger'],
      internet = [...video, ...blogs, 'facebook', 'twitter'];

console.log(internet);

// �������� ���� ��������� � ������� �� ��������� spread
//
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

// 
// ��������� �� �������� ����������
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
 const rst = foo(['Hello', '�����'], {ru: '���', eng: 'World'});
 console.log(rst);