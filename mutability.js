// const person = {
//     name: 'Rick',
//     age: 77,
//     country: 'US',
// }

const clone1 = Object.assign({},person)
const clone2 =  Object.assign({},person)
person.age = 78
person.country = 'FR'
const samePerson = Object.assign({},person)

console.log(clone1)
console.log(clone2)
console.log(samePerson)