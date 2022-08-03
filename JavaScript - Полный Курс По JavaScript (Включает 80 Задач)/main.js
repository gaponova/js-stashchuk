// const myDesktop = {
//   monitor1: 'Dell',
//   monitor2: 'Samsung',
//   laptop: 'Lenovo',
//   keyboard: 'Razer'
// }

// myDesktop.cube = 'Gan'
// myDesktop.mouse = 'Logitech'

// // console.table(myDesktop)

// delete myDesktop.monitor2

// // console.table(myDesktop)

// const addProp = 'country'

// myDesktop[addProp] = 'Ukraine'

// myDesktop['drink'] = 'Morshinska'

// console.table(myDesktop)

/*---------------------------*/

// const myDesktop = {
//   monitor1: 'Dell',
//   monitor2: 'Samsung',
//   laptop: 'Lenovo',
//   keyboard: 'Razer',
//   mouse: 'Logitech',
//   cube: {
//     firstCube: 'Gun',
//     secondCube: 'MGC',
//     thirdCube: 'Rubik'
//   }
// }

//console.log(myDesktop.cube.thirdCube)

// myDesktop['testProp'] = 'one'

// delete myDesktop.cube.thirdCube

// console.table(myDesktop)

/*---------------------------*/

// const myCity = {
//   city: 'New York',
//   cityGreeting: function () {
//     console.log('Greeting!!!')
//   }
// }

// myCity.cityGreeting()

// const myCat = {
//   name: 'William',
//   callbackHome() {
//     console.log('Ням-ням')
//   }
// }

// // myCat.callbackHome()

// JSON.stringify(myCat)

/*---------------------------*/

// const person = {
//   name: 'Ilon',
//   age: 45
// }

// const person2 = Object.assign({}, person)

// person2.age = 50

// console.log(person.age)

// console.log(person2.age)

// console.table(person)

// console.table(person2)

/*---------------------------*/

// const person = {
//   name: 'Ilon',
//   age: 45
// }

// const person2 = {
//   ...person
// }

// person2.name = 'Alice'

// console.log(person.name)

// console.log(person2.name)

// console.table(person)

// console.table(person2)

/*---------------------------*/

// const person = {
//   name: 'Ilon',
//   age: 45
// }

// const person2 = JSON.parse(JSON.stringify(person))

// person2.name = 'Alice'

// console.log(person.name)

// console.log(person2.name)

/*---------------------------*/



// function myFn(a, b) {
//   let c
//   a = a + 3
//   c = a + b
//   return c
// }

// myFn(5, 3)

// const d = myFn(5, 3)

// console.log(d)

/*---------------------------*/

// function myFn() {}

// myFn()

/*---------------------------*/

const personOne = {
  name: '',
  age: 21
}

function increasePersonAge(person) {
  const updatedPerson = Object.assign({}, person)
  updatedPerson.age += 1
  return updatedPerson
}

const updatedPersonOne = increasePersonAge(personOne)
console.log(personOne.age)
console.log(updatedPersonOne.age)

/*---------------------------*/