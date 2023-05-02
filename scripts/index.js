'use strict'

// 1

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
let updatedArr = arr1.concat( arr2 )
console.log(updatedArr)

// 2

let arr3 = [1, 2, 3];
arr3.reverse();
console.log(arr3);

// 3

let arr4 = [1, 2, 3];
arr4.push(4, 5, 6,)
console.log(arr4)

// 4

let arr5 = [1, 2, 3];
arr5.unshift(4, 5, 6);
console.log(arr5);

// 5-6

let arr6 = ['js', 'css', 'jq'];
console.log(arr6[0]);
console.log(arr6[2]);

// 7-8

let arr7 = [1, 2, 3, 4, 5];
let newArr = arr7.slice(0, 3);
let newArr2 = arr7.slice(3, 5);
console.log(newArr);
console.log(newArr2);

// 9

let arr8 = [1, 2, 3, 4, 5];
arr8.splice(1, 2);
console.log(arr8);

// 10

let arr10 = [1, 2, 3, 4, 5];
let newArr10 = arr10.slice(1, 4);
console.log(newArr10);

// 11

let arr11= [1, 2, 3, 4, 5];
arr11.splice(3, 0, 'a', 'b', 'c');
console.log(arr11);

// 12

let arr12 = [1, 2, 3, 4, 5];
arr12.splice(1, 0, 'a', 'b');
arr12.splice(6, 0, 'c');
arr12.push('e');
console.log(arr12);

// 13

let arr13 = [3, 4, 1, 2, 7];
arr13.sort();
console.log(arr13);

// 14

let arr14 = [5, 6, 7, 8, 9];
let sum = arr14.reduce((a, b) => a + b);
console.log(sum);

// 15

const arrSixteen = [1, 2, [3, 4], 5, [6, 7]];
const arrSixteen2 = arrSixteen.filter((num) => Array.isArray(num));
console.log(arrSixteen2);

// 16
const arrSeventeen =  [5,-3, 6,-5, 0,-7, 8, 9];
const arrSeventeen2 = arrSeventeen.reduce((value, item) => {
    return item < 0 ? value + 1 : value;
},0);
console.log(arrSeventeen2)




