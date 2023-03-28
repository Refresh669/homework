'use strict'


// Задание 1


let output = ' ';

for (let i = 10; i <= 20; i++) {
    output = output + i + ', ';
}
console.log(output);


// Задание 2


for (let i = 10; i <= 20; i++){
    console.log(i ** 2)
}


// Задание 3


for (let i = 1; i <= 10; i++){
    console.log('7 * ' + i + ' = ' + i * 7)
}


// Задание 4


let sum = 0;
for (let i = 1; i <= 15; i++ ){
    sum += i;
}
console.log(sum)


// Задание 5


let mult = 1
for (let i = 15; i <= 35; i++){
    mult *= i;
}
console.log(mult)


// Задание 6


let sum2 = 0
for (let i = 1; i <= 500; i++){
    sum2 += i;
}
console.log(sum2 / 500)


// Задание 7


let sum3 = 0
for (let i = 30; i <= 80; i++){
    if (i % 2 === 0)  sum3 += i
}
console.log(sum3)


// Задание 8


for (let i = 100; i <= 200; i++){
    if (i % 3 === 0)
        console.log(i)
}



// Задание 9/10/11


let a = +prompt(`Введите натуральное число‍🏳️‍🌈`)
let output2 = ' ';
let b = 0;
let sum4 = 0;

for(let i = 1; i <= a; i++){
    if(a % i === 0){
        output2 = output2 + i + ' ';
        if(i % 2 === 0){
            b++;
            sum4 += i;
        }
    }
}
console.log('Дільники числа : ' + output2)
console.log('Кількість його парних дільників: ' + b)
console.log('Сума парних дільників: ' + sum4)


// Задание 12


for (let i = 1; i <= 10; i++) {
    console.log('')
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i*j}`);
    }
}




























