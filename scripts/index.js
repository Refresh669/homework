'use strict'

// 1

let number = +prompt(`Name a number greater than 4 and less than 8`)
if (number === 5 || number === 6 || number === 7) {
    alert(`yes! =)`);
}
else {
    alert(`No! =(`);
}


//2


let numOrStr = prompt('input number or string');
console.log(numOrStr);

switch(true) {
    case numOrStr === null:
        console.log('вы отменили');
        break;
    case numOrStr.trim() === '':
        console.log('Empty String');
        break;
    case isNaN( +numOrStr ):
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!');
        break;
}

