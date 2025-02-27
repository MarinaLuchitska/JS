
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
    // function calc(a, b) {
    //     return a * b;
    //     }
    //     console.log(calc(5,6))
// -----------------------------------------------------------------------

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function calc(r) {
//     const pi = 3.14;
//     return pi * (r*r);
// }
//     console.log(calc(3))

// -----------------------------------------------------------------------

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function calc(h,r){
//     const pi = 3.14;
//     return 2 * pi * (r*r) + 2 * pi * r * h;
// }
//     console.log(calc(5,3))

//-----------------------------------------------------------------------

// - створити функцію яка приймає масив та виводить кожен його елемент


// function printerArray(array) {
//     for (const fruit of array) {
//         console.log(fruit);
//     }
// }
// let fruits = ['banana', 'apple', 'cherry'];
//
// printerArray(fruits);

// -----------------------------------------------------------------------

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph (text){
//     document.write(`<p>${text}</p>`)
// }
// paragraph(`teeeeeeeeeeeeeeeeeeext`)

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий

// function paragraph (text){
//     document.write(`<ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//     </ul>`)
// }
// paragraph(`teeeeeeeeeeeeeext`)

// ------------------------------------------------------------------------

// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

// function paragraph (text, n){
//     document.write(`<ul>`)
//
//     for (let i = 0; i < n; i++) {
//         document.write(`<li>${text}</li>`);
//     }
// }
//     document.write(`</ul>`)
//
// paragraph(`teeeeeeeeeeeeeeeeeeeext`, 8)

//------------------------------------------------------------------------------

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write

// function elements (array){
//     document.write(`<ul>`)
//
//         for (let i = 0; i < array.length; i++) {
//             document.write(`<li>${array[i]}</li>`);
//         }
//
//         document.write(`</ul>`);
//     }
//
//     let array = ['fkfkkfk', 'Hello', true, false, 'Jmmmckdmidi'];
//
// elements(array)

//--------------------------------------------------------------------------------

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// function foobar (users){
//     for (let user of users){
//         document.write(`<div>${user.id},${user.name},${user.age}</div>`)
//     }
//
// }
// let users = [
//     {id: 1, name: 'John', age: 25},
//     {id: 2, name: 'Jane', age: 30},
//     {id: 3, name: 'Tom', age: 22},
//     {id: 4, name: 'Alice', age: 28}
// ];
//
// foobar(users);

// ------------------------------------------------------------------------

// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву


// function numberMin(numbers) {
//     let min = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] < min) {
//             min = numbers[i];
//         }
//     }
//
//     return min;
// }
//
// console.log(numberMin([77, -8, 0, 7, 44, 88, 567]));

// -----------------------------------------------------------------------------

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

 function sum (arr){
    let total = 0;
    for (let item of arr){
    total = total + item;
    }
    return total;
    }
    console.log(sum([777, 2, 10]));

// -----------------------------------------------------------------------------

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2).
// Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr,i1,i2){
      let temp = arr[i1];
      arr[i1] = arr[i2];
      arr[i2] = temp;
   return arr;
}

console.log(swap([11,22,33,44],0,1))

//-----------------------------------------------------------------------------

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400












