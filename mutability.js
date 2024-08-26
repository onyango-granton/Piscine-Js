const person = {
    name: 'Rick',
    age: 78,
    country: 'FR',
  }

const clone1 = Object.assign({},person)
const clone2 =  Object.assign({},person)
const samePerson = Object.assign({},person)