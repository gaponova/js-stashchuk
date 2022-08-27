// const petCat = {
//   name: 'William',
//   age: 'three month',
//   food: {
//     fish: 'hake',
//     meat: 'chicken',
//     vegetables: false
//   },
//   owner: 'Tatiana'
// };

// let petDog = null

// console.log(petCat, petDog);


/*-------------------------*/

// const myCity = {
//   city: 'Прилуки',
//   welcome: function () {
//     console.log('Добро пожаловать!!!')
//   }
// }

// myCity.welcome();

/*-------------------------*/
// const myCity = {
//   city: 'Прилуки',
//   welcome() {
//     console.log('Добро пожаловать!!!')
//   }
// }

// myCity.welcome();

/*-------------------------*/

// const person = {
//   name: 'Ilon',
//   age: 45
// }

// const person2 = Object.assign({}, person)

// person2.name = 'Will'

// console.log(person.name);
// console.log(person2.name);

/*-------------------------*/

// const person = {
//   name: 'Ilon',
//   age: 45
// }

// const person2 = JSON.parse(JSON.stringify(person))

// person2.age = 53

// console.log(person.age);

// console.log(person2.age);

/*-------------------------*/

// let a = 3
// let b = 5

// let c

// c = a + b
// console.log(c)

// a = 8
// b = 12

// c = a + b
// console.log(c)

/*-------------------------*/

// let a = 3
// let b = 5

// function sum(a, b) {
//   const c = a + b
//   console.log(c)
// }

// sum(a, b)

// a = 8
// b = 12

// sum(a, b)

/*-------------------------*/

// function myFn(a, b) {
//   let c
//   a = a + 1
//   c = a + b
//   return c
// }

// myFn(9, 10)

// let d = myFn(9, 10)

// console.log(d)

// myFn(22, 44)

// let t = myFn(22, 44)

// console.log(t)

/*-------------------------*/

// function myFn() {}

// myFn()

/*-------------------------*/

// const personOne = {
//   name: 'Ilon',
//   age: 45
// }

// function increasePersonAge(person) {
//   const updatedPerson = Object.assign({}, person)
//   updatedPerson.age += 1
//   return updatedPerson
// }

// const updatedPersonOne = increasePersonAge(personOne)

// console.log(personOne.age)
// console.log(updatedPersonOne.age)



// const petCat = {
//   name: 'William',
//   age: 3
// }

// function plusAge(person) {
//   const updateAge = Object.assign({}, person)
//   updateAge.age += 1
//   return updateAge
// }

// const petDog = plusAge(petCat)

// console.log(petCat.age)
// console.log(petDog.age)


/*-------------------------*/

// function printMyName() {
//   console.log('Bogdan')
// }

// console.log('Start')

// setTimeout(printMyName, 5000)

/*-------------------------*/

// let a
// let b

// function myFn() {
//   let a
//   let b
//   a = true
//   b = 10
//   console.log(a, b)
// }

// myFn()

// console.log(a)
// console.log(b)

/*-------------------------*/

// const buttonInfo = {
//   width: 200,
//   height: 100
// }

// const buttonStyle = {
//   color: 'yellow',
//   background: 'black'
// }

// const button = {
//   ...buttonInfo,
//   ...buttonStyle
// }

// console.table(button)

/*-------------------------*/

const name = 'Таня'
const city = 'Прилуки'

const result = `Меня зовут ${name}, я живу в городе ${city}`

console.log(result)