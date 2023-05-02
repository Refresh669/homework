'use strict';

//1
const array = [2, 5, 7, 9, 9];

const myIndexOf = (arr, elm) => {
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === elm){
            return i;
        }
    }
    return -1;
}
console.log(myIndexOf(array,9));

//2
const myLastIndexOf = (arr, elm) => {
    for (let i = arr.length - 1; i >= 0; i--){
        if(arr[i] === elm){
            return i;
        }
    }
    return -1;
}
console.log(myLastIndexOf(array,9));

//3
const myFind = (arr, call) => {
    for (let i = 0; i < arr.length; i++){
        if(call(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
}
console.log(myFind(array, (item) => item > 5));

//4
const myFindIndex = (arr, call) => {
    for (let i = 0; i < arr.length; i++){
        if(call(arr[i])) {
            return i;
        }
    }
    return undefined;
}
console.log(myFindIndex(array,(item) => item > 5));

//5
const myIncludes = (num) => {
    for (let i = 0; i < array.length; i++){
        if(array[i] === num) {
            return true;
        }
    }
    return false;
}
console.log(myIncludes( 5));

//6
const myEvery = (arr, call) => {
    for (let i = 0; i < arr.length; i++){
        if(!call(arr[i])){
            return false
        }
    }
    return true
}
console.log(myEvery(array, (item) => item > 1));

//7
const mySome = (arr, call) => {
    for (let i = 0; i < arr.length; i++){
        if(call(arr[i])){
            return true
        }
    }
    return false
}
console.log(mySome(array, (item) => item < 1));