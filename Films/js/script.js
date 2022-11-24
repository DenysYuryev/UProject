/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {           // очікування завантаження контенту сторінки

    // 1
    const adv = document.querySelectorAll('.promo__adv img');

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    deleteAdv(adv);

    //
    const genre = document.querySelector('.promo__genre'),  
          bg = document.querySelector('.promo__bg');

    const makeChanges = () => {
        genre.textContent = "ДРАМА";                        // 2
        bg.style.backgroundImage = "url('img/bg.jpg')";     // 3
    };
    makeChanges();

    // 4
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const movieList = document.querySelector('.promo__interactive-list');
    movieList.innerHTML = '';

    const sortArr = (arr) => {
        arr.sort();
    };

    movieDB.movies.sort();

    function createMovieList (films, parent) {    
        parent.innerHTML = "";
        sortArr(films);
    
        films.forEach((film, i) => {
            movieList.innerHTML += `
            <li class="promo__interactive-item">${i + 1}. ${film}
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    }

    createMovieList (movieDB.movies, movieList);

    const addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();     // сторінка не буде перезавантажуватись

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log("Додаємо улюблений фільм...");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, movieList);    
        }
 
        event.target.reset();           //    addForm.reset();

    });

});


