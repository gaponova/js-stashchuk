/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
//  */

// OPTION 1
const myName = 'Татьяна';
const mySurname = 'Гапонова';
const myProfession = 'Front-end разработчик';
const personInfo1 = `Меня зовут ${myName} ${mySurname} и я ${myProfession}.`;

console.log(personInfo1);

// OPTION 2
const personInfo2 = 'Меня зовут ' + myName + ' ' + mySurname + ' и я ' + myProfession + '.';

console.log(personInfo2);

