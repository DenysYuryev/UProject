"use strict";

window.addEventListener('DOMContentLoaded', () => {
    // 
    // tabs
    //
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
            // item.style.display = 'none'; // скрити весь контент
        });

        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        // tabsContent[i].style.display = 'block';

        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // 
    // timer
    // 
    const deadline = '2022-12-22';

    function getTimeRemaining(endTime) {
        let days, hours, minutes, seconds;
        const t = Date.parse(endTime) - Date.parse(new Date());

        if (t <= 0) {
            days = hours = minutes = seconds = 0;
        } else {
              days = Math.floor(t / (1000 * 60 * 60 * 24)),         // мсек в добі
              hours = Math.floor((t / (1000 * 60 * 60) % 24)),        // % - залишок від ділення 
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);
        }
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minuts': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num <= 9) {
            return `0${num}`;
        } else {
            return num;
        } 
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds');
        
        const timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minuts);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            } 
        }
    }

    setClock('.timer', deadline);

    //
    // Modal Window
    // 
    const modalWindowOpen = document.querySelectorAll('[data-modalOpen]'),
          modalWindowClose = document.querySelector('[data-modalClose]'),
          modalWindow = document.querySelector('.modal');

    modalWindowOpen.forEach(btn => btn.addEventListener('click', () => modalEction('open')));

    modalWindowClose.addEventListener('click', () => modalEction('close'));

    modalWindow.addEventListener('click', (evnt) => {
        if (evnt.target === modalWindow) {
            modalEction('close');
        }
    });

    document.addEventListener('keydown', (evnt) => {
        if (evnt.code === 'Escape' && modalWindow.classList.contains('show')) {
            modalEction('close');
        }
    });

    function modalEction (action) {
        if (action === 'close') {
            modalWindow.classList.add('hide');          // додаємо css стиль до тегу модального вікна
            modalWindow.classList.remove('show');
            document.body.style.overflow = '';
        } else if (action === 'open') {
            modalWindow.classList.add('show');          // додаємо css стиль до тегу модального вікна
            modalWindow.classList.remove('hide');
            document.body.style.overflow = 'hidden';    // блокування прокрутки
            clearInterval(modalWindowTimerId);          // 
        } else {
            console.log('Erorr modal window ection!');
        }
    }

    // Time delay to show modal window
    const modalWindowTimerId = setTimeout(modalEction('open'), 5000);

    // Scroll pages to same coordinate - end of page
    function modalWindowShowByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) {
        // -1px if not working in browser
            modalEction('open');
            window.removeEventListener('scroll', modalWindowShowByScroll);
        }
    }

    window.addEventListener('scroll', () => modalWindowShowByScroll());
});



