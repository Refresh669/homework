'use strict';
//1
const arr = ['a', 'b', 'c', 'd'];
const result1 = arr.slice(0, 2).join('+') + ', ' + arr.slice(2, 4).join('+');
console.log(result1);

//2
const arr2 = [2, 5, 3, 9];
const result2 = arr2.slice(0, 1) * arr2.slice(1, 2)  + arr2.slice(2, 3) * arr2.slice(3, 4);
console.log(result2);

//3
const arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const result3 = arr3.find((num)=> {
    return num.includes(4);
})
console.log(result3[0]);

//4
const arr4 = {
    js: ['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
};
const result4 = arr4.js.find((str)=>{
    return str.includes('jQuery');
})
console.log(result4);

//5
const arr5 = [];
for(let i = 0; i < 10; i++){
    arr5.push('x'.repeat(i + 1 ));
}
console.log(arr5);

//6
const arr6 = [];
for(let i = 1; i < 10; i++){
    arr6.push(String(i).repeat(i));
}
console.log(arr6);

//7
const arr7 = [];
function arrayFill(x, num){
    for(let i = 0; i < num; i++){
        arr7.push(x)
    }
    return arr7;
}
console.log(arrayFill('x', 5));

//8
const arr8 = [1, 15, 3, 7, 8];
const result5 = arr8.findIndex((num, ind, arr) => {
    const sum = arr.slice(0, ind + 1).reduce((value, item) => value + item, 0);
    return sum > 10;
});
console.log(result5 + 1);

//9
const arr9 = [1, 15, 3, 7, 8];
const result6 = (arr) => {
    const reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}
console.log(result6(arr9));

//10
const arr10 =  [[1, 2, 3], [4, 5], [6]];
const result7 = arr10.flat(1).reduce((value, item) =>{
    return value + item;
},0)
console.log(result7);
//11
const arr11 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
const result8 = arr11.flat(3).reduce((value, item) =>{
    return value + item;
},0)
console.log(result8);