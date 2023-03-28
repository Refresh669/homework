// 'use strict'
//
// function fib(n = 1) {
//     if (typeof n !== 'number' || n <= 0) {
//         return "Введите положительное число.";
//     }
//
//     let a = 0;
//     let b = 1;
//
//     for (let i = 1; i < n; i++) {
//         const temp = b;
//         b = a + b;
//         a = temp;
//     }
//
//     return b;
// }
//
// console.log(fib()); // 1
// console.log(fib(1)); // 1
// console.log(fib(2)); // 1
// console.log(fib(3)); // 2
// console.log(fib(4)); // 3
// console.log(fib(5)); // 5
// console.log(fib(6)); // 8




'use strict';
const userInput = +prompt("Введите значение n:");

function fib(n = 1) {
    if (typeof n !== 'number' || n <= 0) {
        return "Введите положительное число.";
    }

    let a = 0;
    let b = 1;

    for (let i = 1; i < n; i++) {
        const temp = b;
        b = a + b;
        a = temp;
    }

    return b;
}

console.log(fib(userInput));