'use strict';

//1
const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

const arr1  = arr.filter(elem => elem > 0).reduce((value, item) =>{
    return value + item;
},0);
const arr2  = arr.filter(elem => elem > 0).reduce((value, item) =>{
    if (item > 0){
        return value + 1;
    } else
        return value;
},0);
console.log("Суму позитивних елементів: " + arr1);
console.log("Кількість позитивних елементів: " + arr2);


//2
const min = arr.reduce((value, item) => {
    if(value < item){
        return value;
    } else
        return item
},0);
const index = arr.indexOf(min);
console.log("Мінімальний елемент масиву: " + min);
console.log("Його порядковий номер: " + index);

//3
const max = arr.reduce((value, item) => {
    if(value > item){
        return value;
    } else
        return item
},0);
const index2 = arr.indexOf(max);
console.log("Максимальний  елемент масиву: " + max);
console.log("Його порядковий номер: " + index2);

//4
const arr3 = arr.reduce((value, item) =>{
    if(item < 0){
        return value + 1;
    } else
        return value
},0);
console.log("Кількість негативних елементів: " + arr3);

//5
const arr4 = arr.filter(elem => elem > 0).reduce((value, item) =>{
    if(item % 2 !== 0){
        return value + 1;
    } else
        return value;
}, 0);
console.log("Кількість непарних позитивних елементі: " + arr4);

//6
const arr5 = arr.filter(elem => elem > 0).reduce((value, item) =>{
    if(item % 2 === 0){
        return value + 1;
    } else
        return value;
}, 0);
console.log("Кількість парних позитивних елементів: " + arr5);

//7
const arr6 = arr.filter(elem => elem > 0).reduce((value, item) =>{
    if(item % 2 === 0){
        return value + item;
    } else
        return  value
},0);
console.log("Сума парних позитивних елементів: " + arr6);

//8
const arr7 = arr.filter(elem => elem > 0).reduce((value, item) =>{
    if(item % 2 !== 0){
        return value + item;
    } else
        return  value;
},0);
console.log("Сума непарних позитивних елементів: " + arr7);

//9
const arr8 = arr.filter(elem => elem > 0).reduce((value, item) => {
    return  value * item;
},1);
console.log("Добуток позитивних елементів: " + arr8);

//10
const max2 = arr.reduce((value, item) => {
    if(value > item){
        return value;
    } else
        return item;
},0);

const arr9 = arr.map((num) => {
    if(num === max2){
        return num;
    } else
        return 0;
});
console.log(arr9);