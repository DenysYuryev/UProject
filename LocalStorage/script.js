'use strict';

// мотоди localStorage
/*
localStorage.setItem('num', 5);
localStorage.getItem('num');

localStorage.remmoveItem('num');
localStorage.clear();
*/

const checkbox = document.querySelector('#checkbox'),   // id 
      form = document.querySelector('form'),            // тег form (форма для звернення)
      change = document.querySelector('#color');        //

if (localStorage.getItem('isChecked')) {
    checkbox.checked =true;
}

if (localStorage.getItem('bgForm' === 'changed')) {
    form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => localStorage.setItem('isChecked', true));

change.addEventListener('click', () => {
    if (localStorage.getItem('bgForm') === 'changed') {
        localStorage.removeItem('bgForm');
        form.style.backgroundColor = '#fff';

    } else {
        localStorage.setItem('bgForm', 'changed');
        form.style.backgroundColor = 'red';
    }
});

