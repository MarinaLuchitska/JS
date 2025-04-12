// Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій
//

// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

 let areaRectangle = (a,b) => a *b;
console.log(areaRectangle(3,5))

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
 let areaCircle = (r) => pi * (r*r)
     const pi = 3.14;
console.log(areaCircle(6))

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

 let areaCylinder = (r,h) => 2 * pi * (r*r) + 2 * pi * r * h
console.log(areaCylinder(4,6))

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

// let arrPrint = (arr) => {
//     for (let fruit of arr) {
//         console.log(fruit);
//     }
// }
// let fruits = ['vasia','misha','kokos']
// arrPrint(fruits)

// #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let fncPrgrph = (txt) => {
//     let paragraphElement = document.createElement('p');
//     paragraphElement.textContent = txt;
//     document.body.appendChild(paragraphElement);
// }
// fncPrgrph('iivhjlccjjcl')

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//  let fncUl = (tx) => {
//      let ul = document.createElement('ul')
//      for (let i = 0; i < 3; i++) {
//          let li = document.createElement('li');
//          li.textContent = tx; // Призначаємо текст для кожного <li>
//          ul.appendChild(li);
//      }
//      document.body.appendChild(ul);
//  }
// fncUl('yucyfufi');

// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let fncUll = (teext, x) =>{
//     let ul = document.createElement('ul')
//     for (let i= 0; i < x; i++){
//         let li = document.createElement('li')
//         li.textContent = teext;
//         ul.appendChild(li);
//     }
//     document.body.appendChild(ul);
// }
// fncUll('fipyfyfuyfo',10)

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let funcArr = (arr) => {
//     let ul = document.createElement('ul')
//        for(let i = 0; i < arr.length; i++){
//            let li = document.createElement('li')
//            li.textContent =arr[i];
//            ul.appendChild(li);
//
//        }
//     document.body.appendChild(ul)
// }
// let arr = ['dima','ivan','kokos']
//
// funcArr(arr)


// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let users = [
    {id : 1, name: 'Oleg', age: 36},
    {id : 2, name: 'kokos', age: 29},
    {id : 3, name: 'ogirok', age: 12.8}
]

let funcDiv = (users) => {
    for (let user of users){
        let div = document.createElement('div')
        div.textContent = `ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`;
        document.body.appendChild(div)
    }
}
funcDiv(users)


// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
let fncMin = (num) => {
    let min = num[0]
    for(let i = 1;i < num.length; i++) {
        for (let i = 0; i < num.length; i++) {
            if (num[i] < min) {
                min = num[i];
            }
        }
    }
    return min;
}

console.log(fncMin([-77, -8, 0, 7, 44, 88, 567]));

// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
let fncSum = (arr) => {
    let total = 0;
    for(let item of arr){
        total = total +item;
    }
    return total;
}
console.log(fncSum([11,22,33,]))


// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let fncSwap = (arr,index1,index2) =>{
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}
console.log(fncSwap([11,22,33,44],1,3))


// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            return sumUAH / currencyValues[i].value;
        }
    }

};
console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD')); // => 250
console.log(exchange(5000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'EUR'));