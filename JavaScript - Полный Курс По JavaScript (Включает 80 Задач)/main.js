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

// const personOne = {
//   name: '',
//   age: 21
// }

// function increasePersonAge(person) {
//   const updatedPerson = Object.assign({}, person)
//   updatedPerson.age += 1
//   return updatedPerson
// }

// const updatedPersonOne = increasePersonAge(personOne)
// console.log(personOne.age)
// console.log(updatedPersonOne.age)

/*---------------------------*/

// function printMyName() {
//   console.log('Ilon')
// }

// console.log("Start")

// setTimeout(printMyName, 3000)

/*---------------------------*/

// const a = 5

// function myFn() {
//   function innerFn() {
//     console.log(5)
//   }
//   innerFn()
// }

// myFn()

/*---------------------------*/

// let a
// let b

// function myFn() {
//   let b
//   a = true
//   b = 10
//   console.log(a)
// }

// myFn()

// console.log(a)
// console.log(b)

/*---------------------------*/

// const name = 'Татьяна'

// const city = 'Прилуки'

// const allInfo = `${'Меня зовут'} ${name}, ${'я живу в городе'} ${city}`

// console.log(allInfo)

/*---------- Вариант 1 -----------------*/

// function multByFactor(value, multiplier = 3) {
//   return value * multiplier
// }

// multByFactor(10, 4)

// test1 = multByFactor(10, 4)

// test2 = multByFactor(12)

// console.log(test1)
// console.log(test2)

/*---------- Вариант 2 -----------------*/

// const mult = function (value, multiplier = 5) {
//   return value * multiplier
// }

// mult(3, 6)
// mult(5)

// console.log(mult(3, 6))
// console.log(mult(5))

/*-----------Стрелочная функция----------------*/

// const arrow = (value, multiplier = 3) => {
//   return value * multiplier
// }

// arrow(7, 9)

// console.log(arrow(7, 9))

/*-----------Стрелочная функция без параметров----------------*/

// setTimeout(() => {
//   console.log('Стрелочная функция без параметров')
// }, 4000)

// console.log('Start')

// setTimeout(function () {
//   console.log('Стрелочная функция без параметров')
// }, 4000)

// console.log('Start')

/*---------------------------*/

// const newPost = (post, addedAt = Date()) => {
//   const newPost = {
//     ...post,
//     addedAt
//   }
//   return newPost
// }

// const firstPost = {
//   id: 1,
//   name: 'Ilon'
// }

// newPost(firstPost)

// console.table(newPost(firstPost))

/*---------------------------*/

// const fnWithError = () => {
//   throw new Error('Some error')
// }

// try {
//   fnWithError()
// } catch (error) {
//   console.error(error)
//   console.log(error.message)
// }

// console.log('Continue...')

/*---------------------------*/

// function myFn(a) {
//   console.log(a);
// }

// const b = true;
// let c = 10;

// myFn(3 + 2)
// myFn(b + c)
// myFn(let d)
// myFn(c = c + 6;)

/*---------------------------*/
// const myArray = [1, 2, 3]
// console.log(myArray)

// const myArray2 = new Array(1, 2, 3)
// console.log(myArray2)

// myArray === myArray2

/*---------------------------*/

// const myArray = [1, true, 'a']

// console.log(myArray[0])
// console.log(myArray[1])
// console.log(myArray[2])

// console.log(myArray.length)

/*---------------------------*/

// const myArray = [1, 2, 3, 4]
// console.log(myArray)
// console.log(myArray.length)

// console.log(myArray[2])

// myArray[2] = true
// console.log(myArray)

// myArray[4] = 'abc'
// console.log(myArray[4])
// console.log(myArray)

// console.log(myArray.length)

/*---------------------------*/

// const myArray = [1, 2, 3]
// console.log(myArray)

// myArray.push(4)
// console.log(myArray)

// myArray.push(true)
// console.log(myArray)

// console.log(myArray.length)

/*---------------------------*/

// const myArray = [1, 2, 3]
// console.log(myArray)

// myArray.pop()
// console.log(myArray)

// const removedElement = myArray.pop()
// console.log(myArray)

// console.log(removedElement)

/*---------------------------*/

// const myArray = [1, 2, 3]
// console.log(myArray)

// myArray.unshift(true)
// console.log(myArray)

// myArray.unshift('abs')
// console.log(myArray)

// console.log(myArray.length)

/*---------------------------*/

// const myArray = [1, 2, 3]
// console.log(myArray)

// myArray.shift()
// console.log(myArray)

// const removedElement = myArray.shift()
// console.log(myArray)
// console.log(removedElement)

/*---------------------------*/

// const myArray = [1, 2, 3]
// console.log(myArray)

// myArray.forEach(el => console.log(el * 2))

// console.log(myArray)

/*---------------------------*/

// const myArray = [1, 2, 3]
// console.log(myArray)

// const newArray = myArray.map(el => el * 3)

// console.log(myArray)
// console.log(newArray)

// console.table(newArray)

/*---------------------------*/

// const myArray = [1, 2, 3]
// console.log(myArray)

// const newArray = myArray.map((el) => {
//   return el * 5
// })

// console.log(myArray)
// console.log(newArray)

/*---------------------------*/

// const userProfile = {
//   name: 'Ilon',
//   comments: 23,
//   hasSignedAgreement: false
// }

// const {
//   name,
//   comments
// } = userProfile
// const {
//   hasSignedAgreement
// } = userProfile

// console.log(name)
// console.log(hasSignedAgreement)

/*---------------------------*/

// const fruits = ['Apple', 'Orange']

// const [fruitOne, fruitTwo] = fruits

// console.log(fruitOne)
// console.log(fruitTwo)

/*---------------------------*/

// const userProfile = {
//   name: "Ilon",
//   comments: 23,
//   hasSignedAgreement: true,
// };

// const userInfo = ({ name, comments }) => {
//   if (!comments) {
//     return `User ${name} has no comments`;
//   }
//   return `User ${name} has ${comments} comments`;
// };

// userInfo(userProfile);

// console.log(userInfo(userProfile))

// console.log(userProfile.name)

/*---------------------------*/

// let val = 10

// if (val > 5) {
//   val += 20
// }

// console.log(val)

/*---------------------------*/

// const person = {
//   age: 20
// }

// if (!person.name) {
//   console.log(' Нейм не указано')
// }

/*---------------------------*/

// let val = 10

// if (val < 5) {
//   val += 20
// } else {
//   val -= 20
// }

// console.log(val)

/*------------Вариант 1---------------*/

// const age = 16

// if (age >= 18) {
//   console.log('Is adult')
// } else if (age >= 12) {
//   console.log('Is teenager')
// } else {
//   console.log('Is a child')
// }

/*------------Вариант 2---------------*/

// const age = 17

// if (age >= 18) {
//   console.log('Is adult')
// }

// if (age >= 12 && age < 18) {
//   console.log('Is teenager')
// }

// if (age < 12) {
//   console.log('Is a child')
// }

/*---------------------------*/

// const somePositiveNumbers = (a, b) => {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return 'Один из аргументов не число'
//   }

//   if (a <= 0 || b <= 0) {
//     return 'Одно из чисел непозитивное'
//   }

//   return a + b
// }

// console.log(somePositiveNumbers(0, 9))

/*---------------------------*/

// const month = 8

// switch (month) {
//   case 12:
//     console.log('Декабрь')
//     break
//   case 1:
//     console.log('Январь')
//     break
//   case 2:
//     console.log('Февраль')
//     break
//   default:
//     console.log('Это не зимний месяц')
// }

/*---------------------------*/

// const value = undefined

// value
//   ? console.log('Условие правдиво')
//   : console.log('Условие ложно')

/*---------------------------*/

// let value = 11
// console.log(value >= 0 ? value : -value)

// value = -7
// const res = value >= 0 ? value : -value

// console.log(res)

/*---------------------------*/

// for (let i = 0; i < 5; i++) {
//   console.log(i)
// }

/*---------------------------*/

// const myArray = ['first', 'second', 'third']

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i])
// }

/*---------------------------*/

// const myArray = ['first', 'second', 'third']

// myArray.forEach((element, index) => {
//   console.log(element, index)
// })

/*---------------------------*/

// const myObject = {
//   age: 25,
//   name: 'Ilon',
//   country: 'USA'
// }

// myObject.pet = 'William'

// for (const test in myObject) {
//   console.log(test, myObject[test])
// }

/*---------------------------*/

// const myObject = {
//   age: 25,
//   name: 'Ilon',
//   country: 'USA'
// }

// myObject.pet = 'William'

// for (const test in myObject) {
//   myObject[test] = 10
//   console.log(test, myObject[test])
// }

/*---------------------------*/

// const myObject = {
//   x: 10,
//   y: 20,
//   z: 30
// }

// Object.keys(myObject).forEach(key => {
//   console.log(key, myObject[key])
// })

/*---------------------------*/

// const myObject = {
//   x: 10,
//   y: 20,
//   z: 30
// }

// Object.values(myObject).forEach(value => {
//   console.log(value)
// })

/*---------------------------*/

class Comment {
  constructor(text) {
    this.text = text
    this.votesQty = 0
  }

  upvote() {
    this.votesQty += 1
  }
}

const firstComment = new Comment('First comment')

firstComment.upvote()
console.log(firstComment.votesQty)

firstComment.upvote()
console.log(firstComment.votesQty)

firstComment.upvote()
console.log(firstComment.votesQty)

firstComment.upvote()
console.log(firstComment.votesQty)

firstComment.hasOwnProperty('text')
firstComment.hasOwnProperty('votesQty')

console.log(firstComment.hasOwnProperty('text'))
console.log(firstComment.hasOwnProperty('votesQty'))

firstComment.hasOwnProperty('upvote')
firstComment.hasOwnProperty('hasOwnProperty')

console.log(firstComment.hasOwnProperty('upvote'))
console.log(firstComment.hasOwnProperty('hasOwnProperty'))

/*---------------------------*/

class Comment {
  constructor(text) {
    this.text = text
    this.votesQty = 0
  }

  upvote() {
    this.votesQty += 1
  }

  static mergeComments(first, second) {
    return `${first} ${second}`
  }
}

Comment.mergeComments('First comment. ', 'Second comment.')