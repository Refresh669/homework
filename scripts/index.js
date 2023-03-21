'use strict'

const age = prompt('Введите свой возраст: ');
let word;

if (age !== null && !isNaN(age)) {
    if (age % 10 === 1 && age % 100 !== 11) {
        word = 'год';
    } else if (age % 10 >= 2 && age % 10 <= 4 && (age % 100 < 10 || age % 100 >= 20)) {
        word = 'года';
    } else {
        word = 'лет';
    }
    alert('Ваш возраст: ' + age + ' ' + word);
} else {
    alert('Не правильный возраст');
}

alert(answer)