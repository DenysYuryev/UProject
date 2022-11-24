"use strict";

const arr = [1, 1, 2, 2, 4, 5, 6, 5, 'Mikle'];
const set = new Set(arr);

set.add('Ivan')
   .add('Mikle');

console.log(set);

// set.delete(value);
// set.has(value);
// set.clear();
// set.size;

// for (let value of set) {
//     console.log(value);
// }

// set.forEach((value, valueAgaine, set) => {
//     console.log(value, valueAgaine);
// });

// console.log(set.values());
// console.log(set.keys());
// console.log(set.entries());

function unique(arr){
    return Array.from(new Set(arr));
}
console.log(unique(arr));