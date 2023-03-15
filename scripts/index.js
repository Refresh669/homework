'use strict'

// Task #1

const objectTest = {}
objectTest.name = 'John'
objectTest.surname = 'Smith'
objectTest.name = 'Pete'
delete objectTest.name

// Task #2
// Можно, потому что мы иземеняем внутренности обьета, а не сам обьект.
const user = {
    name: 'John'
}
user.name = 'Pete'
console.log(user.name)

// Task #3

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
const sum = salaries.John + salaries.Ann + salaries.Pete

console.log(sum)