"use strict";

const btns = document.querySelectorAll("button"),
      overlay = document.querySelector(".overlay");

// btn.addEventListener('click', () => {       // слухач подій - додано
//     alert('Click');
// });

let i = 0;
const deleteElement = (e) => {
    console.log(e.target);    
//  console.log(e.CurrentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1){
    //     btn.removeEventListener('click', deleteElement, {once: true});
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');
link.addEventListener('click', function(event){
    event.preventDefault();     // відміна стандартних дії браузера на подію
    console.log(event.target);
});