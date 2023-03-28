'use strict';


const mainFunction = (callback) => {
    const num1 = +prompt("Введите число:")
    const num2 = +prompt("Введите степень:")

    if (isNaN(num1) || isNaN(num2)) {
        alert("Ввод некорректен. Введите числа.");
    } else {
        callback(num1, num2);
    }
};

const showResult = (operation, result) => {
    alert(`Результат ${operation}: ${result}`);
};

const exponentiation = (base, exponent) => {
    const result = Math.pow(base, exponent);
    showResult("возведения в степень", result);
};

const multiply = (a, b) => {
    const result = a * b;
    showResult("умножения", result);
};

const divide = (a, b) => {
    if (b === 0) {
        alert("Деление на ноль невозможно.");
    } else {
        const result = a / b;
        showResult("деления", result);
    }
};

const modulo = (a, b) => {
    if (b === 0) {
        alert("Деление на ноль невозможно.");
    } else {
        const result = a % b;
        showResult("вычисления остатка", result);
    }
};

mainFunction(exponentiation);

// Если хотите вызвать основную функцию с другими callback функциями, просто раскомментируйте строку ниже и закомментируйте строку с mainFunction(exponentiation);
// mainFunction(multiply);
// mainFunction(divide);
// mainFunction(modulo);