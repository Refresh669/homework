'use strict'

function padString() {
    const str = prompt('Введите строку:');
    const length = +prompt('Введите желаемую длину строки:');
    const symbol = prompt('Введите символ для дополнения строки:');
    const isLeft = confirm('Дополнить строку слева?');

    if (!str || !length) {
        return 'Error: string and length arguments are required';
    }
    if (typeof str !== 'string' || typeof symbol !== 'string' || symbol.length !== 1) {
        return 'Error: invalid string or symbol argument';
    }

    const diff = length - str.length;
    if (diff <= 0) {
        return str.substr(0, length);
    }

    const pad = symbol.repeat(diff);
    return isLeft ? pad + str : str + pad;
}

console.log(padString());