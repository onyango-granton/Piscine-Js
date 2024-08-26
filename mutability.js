const person = {
    name: 'Rick',
    age: 78,
    country: 'FR',
  }

const clone1 = new person()
const clone2 = new person()
const samePerson = new person()
samePerson.name = person.name
samePerson.age = person.age
samePerson.country = person.country