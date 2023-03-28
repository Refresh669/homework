'use strict'

let a = +prompt(`введите число 1`)
const b = +prompt(`введите число 2`)

console.log(a === 0 ? 'Верно' : 'Неверно');
console.log(a > 0 ? 'Верно' : 'Неверно');
console.log(a < 0 ? 'Верно' : 'Неверно');
console.log(a >= 0 ? 'Верно' : 'Неверно');
console.log(a <= 0 ? 'Верно' : 'Неверно');
console.log(a !== 0 ? 'Верно' : 'Неверно');
console.log(a === 'test' ? 'Верно' : 'Неверно');
console.log(a === 1 ? 'Верно' : 'Неверно');
console.log(a > 0 && a < 5 ? 'Верно' : 'Неверно');

if (a === 0 || a === 2) {
    a = a + 7;
} else {
    a = a / 10;
}
console.log(a);

let result;
if (a <= 1 && b >= 3) {
    result = a + b;
} else {
    result = a - b;
}
console.log(result);

console.log((a > 2 && a < 11) || (b >= 6 && b < 14) ? 'Верно' : 'Неверно');

const num = 2
switch (num) {
    case 1:
        console.log(`зима`);
        break;
    case 2:
        console.log(`весна`);
        break;
    case 3:
        console.log(`лето`);
        break;
    default:
        console.log(`осень`);
        break;
}









