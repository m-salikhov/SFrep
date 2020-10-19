'use strict'

// Задание 10.1

// let anyNum = prompt('Введите целое число');

// console.log(typeof(anyNum));

// if (anyNum == '') {
//     console.log('пустая строка');
// } else if (isNaN(anyNum)) {
//     console.log('введено не число');
// } else if (!Number.isInteger(+anyNum)) {
//     console.log('введено дробное число');
// } else if (anyNum == null) {
//     console.log ('отмена');
// } else if (+anyNum % 2 == 0) {
//     console.log (anyNum + ' - четное число');
// } else if (+anyNum % 2 !== 0) {
//     console.log (anyNum + ' - нечетное число');
// }

// Вариант с логическим или

// let anyNum = prompt('Введите целое число');

// if (isNaN(anyNum) || anyNum == null || !Number.isInteger(+anyNum) || anyNum == '') {
//     console.log('целое число не введено');
// } else if (+anyNum % 2 == 0) {
//     console.log (anyNum + ' - четное число');
// } else if (+anyNum % 2 !== 0) {
//     console.log (anyNum + ' - нечетное число');
// }

// Задание 10.2

// let x = 10;

// if (typeof (x) == 'string') {
//     console.log('x - строка');
// } else if (isNaN(x)) {
//     console.log('тип х не определен');
// } else if (typeof (x) == 'number') {
//     console.log('x - число');
// } else if (typeof (x) == 'boolean') {
//     console.log('x - логический тип');
// } else {
//     console.log('тип x не определен');
// }

// Задание 10.3

// let anyStr = 'Hello world!';
// let anyStrSplit = anyStr.split(''); 
// anyStrSplit.reverse();
// let anyStrReverse = anyStrSplit.join('');
// console.log(anyStrReverse);

// Задание 10.4
// let randomNumber = Math.floor(Math.random() * 101);
// console.log(randomNumber);

let arr = [1,2,3]

arr.forEach(function(item, index, array) {

console.log(item)

});
