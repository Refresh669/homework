'use strict'

// 1

const x = 10;
const y = 7;

if (x > y) console.log(`x больше, чем y`);
else  console.log(`x не больше, чем y`)


// 2

let num = +prompt("Введите число");

if (num % 2 === 0) {
    console.log("Число " + num + " четное");
} else {
    console.log("Число " + num + " нечетное");
}

// 3

let num2 = +prompt("Введите целое число:");
let num2Length = num2.length;

if (num2 < 0) {
    console.log("Число " + num2 + " отрицательное");
} else {
    console.log("Число " + num2 + " положительное");
}

if (num2Length === 1) {
    console.log("Однозначное число");
} else if (num2Length === 2) {
    console.log("Двузначное число");
} else if (num2Length === 3) {
    console.log("Трехзначное число");
} else {
    console.log("Число состоит из " + num2Length + " цифр");
}

// 4

let a = +prompt("Введите целое число 1");
let b = +prompt("Введите целое число 2");
let c = +prompt("Введите целое число 3");

if (a > b && a > c) alert(`Наибольшее число ` + a)
else if (b > a && b > c) alert(`Наибольшее число ` + b)
else alert(`Наибольшее число ` + c)


// 5

let sideA = +prompt("Введите длину 1 стороны треугольника");
let sideB = +prompt("Введите длину 2 стороны треугольника");
let sideC = +prompt("Введите длину 3 стороны треугольника");

if (((sideA + sideB) > sideC) && ((sideA + sideC) > sideB) && ((sideB + sideC) > sideA))  alert(`Такой треугольник может существовать`)
else alert(`Такой треугольник не может существовать`)


