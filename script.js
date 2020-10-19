'use strict'

// Задание 10.3.1

let anyNum = prompt('Введите целое число');

console.log(typeof(anyNum));

if (anyNum == '') {
    console.log('пустая строка');
} else if (isNaN(anyNum)) {
    console.log('введено не число');
} else if (anyNum == null) {
    console.log ('отмена');
} else if (+anyNum % 2 == 0) {
    console.log (anyNum + ' - четное число');
} else if (+anyNum % 2 !== 0) {
    console.log (anyNum + ' - не четное число');
}

// Задание 10.3.2

let x;

if (typeof (x) == 'string') {
    console.log('x - строка');
} else if (isNaN(x)) {
    console.log('тип х не определен');
} else if (typeof (x) == 'number') {
    console.log('x - число');
} else if (typeof (x) == 'boolean') {
    console.log('x - логический тип');
} else {
    console.log('тип x не определен')
}
