"use ctrict";

// console.log(document.body);              // елементи body
// console.log(document.documentElement);    // елементи - всі
// console.log(document.body.childNodes);      // node вузли у вибраному елемені
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode); // отримання батьківського елементу по id дочернього елементу

// console.log(document.querySelector('[data-current="3"]').nextSibling); // отримання node наступного елементу по атрибуту html
// console.log(document.querySelector('[data-current="3"]').nextElementSibling); // отримання наступного елементу по атрибуту html

// приклад перебору усіх node крім #text (переносі строк, невидимі)
for (let node of document.body.childNodes){
    if (node.nodeName == "#text"){
        continue;
    }
    console.log(node);
}
