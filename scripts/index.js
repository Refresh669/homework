'use strict';

const num = prompt(`Введите число`);
const degree = prompt(`Введите степень`);

function operation(num, degree = 1) {

    return Math.pow(num, degree);
}

const result = operation(num, degree);
console.log(result);
