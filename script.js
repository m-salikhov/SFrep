'use strict'

// console.log('Hello, World!');
// console.log(5 + 8);

// let userName = 'petya';
// console.log(userName);

// userName = 'Misha';
// console.log(userName);

// let defaultName = 'Maks';
// userName = defaultName ;

// console.log(userName);

// const block_size = 50 + 30;
// console.log(block_size);

// console.log(typeof defaultName);

// let myAdress = {
//     town: 'Moscow',
//     street: 'Beringov',
//     house: 42
// }
// console.log(myAdress);
// // alert(typeof (myAdress));

// userName = Boolean(userName);
// console.log(userName);

let anyNum = prompt('Your Number');
anyNum = +anyNum;

if (isNaN(anyNum)) {
    console.log('not a number');
} else if (anyNum % 2 == 0) {
    console.log (anyNum + ' - chetnoe')
} else if (anyNum % 2 !== 0) {
    console.log (anyNum + ' - ne chetnoe')
}
