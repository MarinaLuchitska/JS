// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
// щоб при натисканні на кнопку зникав елемент з id="text".

// let button = document.getElementById('btn')
// button.onclick = function (){
//     let text = document.getElementById('text')
//     text.style.display = 'none';
// }

// #j693ca8 ---------------нема відео
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,та повідомити про це користувача

// let button = document.getElementById('btn')

// button.onclick = function (){
//     let input = document.getElementById('age')
//     let age = Number(input.value);
//     if (age > 18){
//         console.log('Hello')
//     }
//     else if (age < 18){
//         console.log('шмаркач')
//
//     }
//
// }


// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму,
// натиснули кнопку, під формою з'явився блок з вашим об'єктом

// let form = document.getElementById('form')
// let target = document.getElementById('target')
//
// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//
//     const name = form.name.value;
//     const surname = form.surname.value;
//     const age = form.age.value;
//
//     let user = { name, surname, age};
//
//     console.log(user);
//
//     target.innerText = user.name + ' ' + user.surname + ' ' + user.age;
// });


// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати
// до неї +1

// let numBer = +localStorage.getItem('number')
// numBer += 1;
// localStorage.setItem('number',numBer)
// document.getElementById('number').innerText = numBer

//
// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація
// про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно
// відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
//


//
//
// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво,
// без натискань додаткових кнопок
//

// let convertor = document.getElementById('kg')
// let result = document.getElementById('ft')
//     convertor.oninput = function (){
//
//     result.innerText = +convertor.value * 2.2;
//
//     }
//

// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з
// localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
//

// function addToLocalStorage(arrayName, objToAdd) {
//     let existingArray = JSON.parse(localStorage.getItem(arrayName)) || [];
//     existingArray.push(objToAdd);
//     localStorage.setItem(arrayName, JSON.stringify(existingArray));
// }
// addToLocalStorage('users', { name: 'John', age: 30 });
// addToLocalStorage('users', { name: 'Alice', age: 25 });
//
//


//     #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let form = document.getElementById('form')
let table = document.getElementById('table')

form.onsubmit = function (e){
    e.preventDefault()
    let columnValue = +form.column.value;
    let cellValue = +form.cell.value;
    let textValue = form.text.value;

    for (let i= 0;i < columnValue; i++){
        let tr = document.createElement('tr')
        for (let j= 0; j < cellValue; j++){
            let td = document.createElement('td')
            td.innerText = textValue;
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }

};



































