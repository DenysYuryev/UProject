"use strict";

const inputUAH = document.querySelector('#uah'),
      inputUSD = document.querySelector('#usd');

inputUAH.addEventListener('input', () => {
    // конструктор запросу "XML http request"
    const request = new XMLHttpRequest();       
    // метод параметризації налаштувань для підключення до серверу
    //         'METHOD', 'url', ['async' = true], ['ligin'], ['password']
    request.open('GET', 'js/current.json');
    // метод http заголовку для передачі JSON-файлу
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    // відправлення запиту на сервер
    request.send();

    request.addEventListener('load', () => {        // 'readystatechange'
        if (/*request.readyState === 4 && */ request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUSD.value = (+inputUAH.value / data.current.usd).toFixed(2);
        } else {
            inputUSD.value = `Помилка: ${request.status}`;
        }
    });

    // статуси від сервера:
    // status
    // statusText
    // response
    // readyState

    

});