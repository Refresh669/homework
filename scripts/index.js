'use strict'


// Функция, которая проверяет, равны ли два числа
function areNumbersEqual(num1, num2) {
    if (num1 === num2) {
        return true;
    } else {
        return false;
    }
}

// Функция, которая проверяет, больше ли сумма двух чисел, чем 10
function isSumGreaterThan10(num1, num2) {
    if ((num1 + num2) > 10) {
        return true;
    } else {
        return false;
    }
}

// Функция, которая проверяет, отрицательное ли число
function isNumberNegative(num) {
    if (num < 0) {
        return true;
    } else {
        return false;
    }
}
