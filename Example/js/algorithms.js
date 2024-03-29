﻿"use strict";

/*
Линейный поиск на JavaScript

Алгоритм линейного поиска (linear search) просто по очереди сравнивает элементы заданного списка с ключом поиска до тех пор, 
пока не будет найден элемент с указанным значением ключа (успешный поиск) или весь список будет проверен, 
но требуемый элемент не найден (неудачный поиск). 
Зачастую применяется простой дополнительный прием: если добавить ключ поиска в конец списка, то поиск обязательно будет успешным, 
следовательно, можно убрать проверку завершения списка в каждой итерации алгоритма. 
Далее приведен код реализации данного алгоритма на JavaScript; предполагается, что входные данные имеют вид массива.
*/
const A = [1, 4, 12, 5];

function LinearSearch(t, A) {       // t - искомый элемент,
                                    // A - массив, в котором ищем.
    let n = A.length, 
        i = 0;   
    
    A[n] = t;
    
    while (A[ i ] !== t) {
        i++;
    }           
    
    if (i < n) {
        return i;        // На выходе индекс искомого элемента.
    }         
    else {
        return -1;       // Если искомого элемента нет в массиве, то -1.
    }                  
    
}
console.log(LinearSearch(12, A));

/*
Бинарный (двоичный) поиск на JavaScript

Поиск элемента в отсортированном массиве. 
Бинарный поиск (binary search) представляет собой в высшей степени эффективный алгоритм для поиска в отсортированном массиве. 
Он работает путем сравнения искомого ключа t со средним элементом массива A[k]. 
Если они равны, алгоритм прекращает работу. 
В противном случае та же операция рекурсивно повторяется для первой половины массива, если t&lt;A[k], и для второй, если t&gt;A[k].
*/
const B = [1, 4, 12, 5];
//
// Стандартная реализация алгоритма бинарного поиска на JavaScript
//
function BinarySearch(t,B) {            // t - искомый элемент,
                                        // B - упорядоченный массив, в котором ищем.
    let i = 0, 
        j = B.length -1, 
        k;   

    while (i <= j) {
        k = Math.floor((i+j)/2);
        
        if (t === B[k]){
            return k;
        }
        else if (t < B[k]){
            j = k-1;
        }    
        else {
            i = k+1;
        }
    }
                                    // На выходе индекс искомого элемента.
    return -1;                      // Если искомого элемента нет в массиве, то -1.  
}
console.log(BinarySearch(12, B));
//
// Оптимизированный вариант
// 
function BinarySearch(t,B) {        // t - искомый элемент,
                                    // B - упорядоченный массив, в котором ищем.
    let i = 0, j = B.length, k; 
                                 
    while (i < j) {                
        k = Math.floor((i+j)/2);
        if (t <= B[k]) {
            j = k;
        }
        else {
            i = k+1;
        }
    }
   
    if (B[ i ] === t) {
        return i;                   // На выходе индекс искомого элемента.
    }
    else {
        return -1;                  // Если искомого элемента нет в массиве, то -1.
    }
}
console.log(BinarySearch(12, B));

/*
Интерполирующий поиск на JavaScript

Рассмотрим алгоритм поиска в отсортированном массиве, который называется интерполирующим поиском (interpolation search). 
В отличие от бинарного поиска, который всегда сравнивает ключ поиска со средним значением отсортированного массива (а следовательно, всегда уменьшает размер задачи вдвое), 
интерполяционный поиск учитывает значение ключа поиска при определении элемента массива, который будет сравниваться с ключом. 
В определенном смысле алгоритм имитирует поиск имени в телефонной книге. 
Если мы ищем в телефонной книге, например, Иванов — вряд ли мы будем открывать ее в средине или ближе к концу, как поступили бы при поиске Петрова.
*/
const C = [1, 4, 12, 5];
function InterpolationSearch(t,C) {         // t - искомый элемент,
                                            // С - упорядоченный массив, в котором ищем.
    let mid, low = 0, high = C.length-1;

    while (C[low] < t && C[high] > t) {
        mid = low + Math.floor( ((t - C[low]) * (high - low)) / (C[high] - C[low]) );
        
        if (C[mid] < t) {
            low = mid+1;
        }
        else if (C[mid] > t) {
            high = mid-1;
        }
        else {
            return mid;
        }
    }

    if (C[low] === t) {
        return low;                     // На выходе индекс искомого элемента.
    }
    else if (C[high] === t) {
        return high;                    // Если искомого элемента нет в массиве, то -1.
    }
    else {
        return -1;
    }
}
console.log(BinarySearch(12, C));

/*
Поиск подстроки на JavaScript

Формально задачу поиска подстроки (substring search) можно сформулировать следующим образом. 
Пусть есть некоторый текст str символов с длиной N, и шаблон sub с длиной n(n <= N) в виде строки. 
Если для некоторого значения iЄ[0; N-n+1) выполняется равенство str[i], ... , str[i+n-1] = sub[0], ... , sub[n-1], 
т.е. если для всех jЄ[0;n) справедливо равенство sub[j]=str[i+j], то будем говорить, что шаблон sub входит в текст str со сдвигом i. 
Задача поиска подстроки состоит в определении сдвига, с которым шаблон sub входит в текст str (или установлении того факта, что текст не содержит подстроки, соответствующей шаблону). 
Проще говоря, нужно определить индекс i крайнего слева символа первой соответствующей шаблону sub подстроки в тексте str.

(например, если str = "Lorem ipsum" и sub = "ips", то i=6).

Простейший алгоритм поиска состоит в непосредственной проверке всех возможных смещений.
Проверка заключается в последовательном сравнении символов шаблона sub с символами строки str; 
при первом же обнаруженном несовпадении символов проверка прекращается и переменная внешнего цикла увеличивается на 1.
*/
const str = "Lorem ipsum";

function SubstringSearch(sub, str) {    // sub - искомая подстрока
                                        // str - строка, в которой ищем
    let i, j, n = sub.length,
        N = str.length - n + 1;
    
    for (i = 0; i < N; i++) {
        j = 0;
        while (j < n && sub.charAt(j) === str.charAt(i+j)) {
            j++;
        }

        if (j === n) {
            return i;
        }
    }                                   // На выходе индекс 1-го символа подстроки.
                                        // Если искомой подстроки нет в строке, то -1.
    return -1;                          // Например,
}                                       // SubstringSearch('ips', 'Lorem ipsum') = 6,
                                        // SubstringSearch('dolor', 'Lorem ipsum') = -1.

console.log(SubstringSearch('ips', str));