'use strict'

const number = +prompt("Введите число:");

if (number <= 1) {
    console.log("NaN");
} else {
    let divider;
    for (divider = 2; number % divider !== 0; divider++) {
    }
    if (number === divider) {
        alert(`Число ${number} простое и делится только на само себя либо 1`);
    } else {
        alert(`Наименьший делитель числа ${number} равен ${divider}`);
    }
}
