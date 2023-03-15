'use strict'

const old = +prompt(`Сколько вам лет?`)
let answer

switch (old) {
    case 0:
        answer = 'Вам не исполнилось даже года)'
        break
    case 1:
        answer = 'Вам 1 год'
        break
    case 2:
        answer = 'Вам ' + old + ' года'
        break
    case 3:
        answer = 'Вам ' + old + ' года'
        break
    case 4:
        answer = 'Вам ' + old + ' года'
        break
    default:
        answer = 'Вам ' + old + ' лет'

}

alert(answer)
