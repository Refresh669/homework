'use strict'

const number = prompt("Введите число:");

if (number <= 1) {
    console.log("NaN");
} else {
    let divider = 2;
    while (number % divider !== 0) {
        divider++;
    }
    if (number == divider) {    // есть ставить строгое сравнение то кол ломаеться, if не выполняеться
        alert(`Число ` + number + ` простое и делиться только на смого себя либо 1`)
    }
    else {
        alert(`Наименьший делитель числа ${number} равен ${divider}`);
    }
}