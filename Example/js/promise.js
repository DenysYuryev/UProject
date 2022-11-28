"use strict";

console.log('Запит даних...');

const req1 = new Promise(function(resolve, reject) {

    setTimeout(() => {
        console.log('Підготовка даних...');
    
        const product = {
            name: 'TV',
            price: 2000
        };
        
        resolve(product);
    }, 2000);
    
});
// виклик Promise
// req1.then((product) => {
//     // вкладений Promise
//     const req2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });
        
//     req2.then(data => {
//         console.log(data);
//     });
// //    console.log('Дані отримано');
// });

// Варіант Promise через return req1
req1.then((product) => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
            // reject();
        }, 2000);
    });
}).then(data => {
    // модифікація даних
    data.modify = true;
    return data;
}).then(data => {
    console.log(data);
}).catch(() => {                        // у разі reject
    console.error("Виникла помилка");
}).finally(() => {
    console.log('finaly');              // у разі завершення виконання
});

// методи Promise.all(); - очікується виконання усіх об'єктів в масиві
//        Promise.race(); - очікує виконання першого (любого) в масиві

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

test(1000).then(() => console.log('1000 ms'));
test(2000).then(() => console.log('2000 ms'));

Promise.all([test(1000), test(2000)]).then(() => {
    console.log('Promise All done!');
});

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('Promise first done!');
});