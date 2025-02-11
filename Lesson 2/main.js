let arr;
arr = [1, 2, 'kenkfn', -123, false, 345, '111', 111, 'ssss', -345];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
//--------------------------------------------------------------------------
let book1;
let book2;
let book3;

book1 = {
    title : 'book 1',
    pageCount : '111',
    genre: 'Fiction'};
book2 = {
    title: 'book 2',
    pageCount: '222',
    genre: 'Fantasy'};
book3 = {
    title: 'book 3',
    pageCount: '333',
    genre: 'Horror'};
console.log(book1)
console.log(book2)
console.log(book3)
//--------------------------------------------------------------------------
let book4;
let book5;
let book6;

book4 = {
    title : 'book 1',
    pageCount : '111',
    genre: 'Fiction',
    authors: [{name:'Adrian', age:'33'}]
    };
book5 = {
    title: 'book 2',
    pageCount: '222',
    genre: 'Fantasy',
    authors: [{name:'Mark', age:'44'}]
    };
book6 = {
    title: 'book 3',
    pageCount: '333',
    genre: 'Horror',
    authors: [{name:'Ivan', age:'45'}]
    };
console.log(book4)
console.log(book5)
console.log(book6)
//--------------------------------------------------------------------------
//     #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let users
users = [
    [{name: 'Adrian'}, {username: 'hifaf'} ,{password: 14124}],
    [{name: 'Oleg'}, {username: 'kwgwn'} ,{password: 13511}],
    [{name: 'Olga'}, {username: 'lkknken' },{password: 11351}],
    [{name: 'Dmytro'}, {username: 'fnnf' },{password: 11515}],
    [{name: 'Anna'},{ username: '2k3ttg' },{password: 45725}],
    [{name: 'Kate'},{ username: 'qgkggg'} ,{password: 86747}],
    [{name: 'Alex'},{ username: 'pojgp24j'} ,{password: 4635748}],
    [{name: 'Ivan'}, {username: 'ewkgnwkn'} ,{password: 34752}],
    [{name: 'Jane'}, {username: 'rlgnkl'} ,{password: 345746}],
    [{name: 'Roman'}, {username: 'lkewnk'} ,{password: 57683}]
]
console.log(users[0][2])
console.log(users[1][2])
console.log(users[2][2])
console.log(users[3][2])
console.log(users[4][2])
console.log(users[5][2])
console.log(users[6][2])
console.log(users[7][2])
console.log(users[8][2])
console.log(users[9][2])
//--------------------------------------------------------------------------
// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці,
// вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати.
// Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
//
let temperature;
 temperature = [
     {
         day: 'Monday',
         morning:'7',
         noon:'11',
         night:'5'
     },
     {
         day: 'Tuesday',
         morning:'6',
         noon:'10',
         night:'4'
     },
     {
         day: 'Wednesday',
         morning:'4',
         noon:'11',
         night:'4'
     },
     {
         day: 'Thursday',
         morning:'9',
         noon:'15',
         night:'6'
     },
     {
         day: 'Friday',
         morning:'8',
         noon:'13',
         night:'4'
     },
     {
         day: 'Saturday',
         morning:'7',
         noon:'11',
         night:'4'
     },
     {
         day: 'Sunday',
         morning:'7',
         noon:'10',
         night:'2'
     }
 ]
console.log(temperature)
// ------------------------------------------------------------
// Логічні розгалуження:
//
// #bAUsaq6LI
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3

let number = +prompt('enter 1, 0 or -3');
console.log(number);
    if (number !== 0) {
        console.log('true');
    }
    else {
        console.log('false');
    }
//-------------------------------------------------------------
// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число
// (в першу, другу, третю або четверту частину години).

let time = +prompt('enter from 0 to 59');
console.log(time);
if (time>= 0 && time <= 14) {
    console.log('First quarter');
}
    else if (time>= 15 && time <=29) {
    console.log('Second quarter');
}
    else if (time>= 30 && time <= 44) {
    console.log('Third quarter');
}
    else if (time>= 45 && time <= 59) {
    console.log('fourth quarter');
}
else {
    console.log('??????');
}
// ---------------------------------------------------------------
// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити,
// у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt('enter from 1 to 31');
    console.log(day);
if (day>= 1 && day <= 10) {
    console.log('First decade');
}
else if (day>= 11 && day <=20) {
    console.log('Second decade');
}
else if (day >= 21 && day <=31){
    console.log('Third decade');
}
else{
    console.log('??????');
}
// ---------------------------------------------------------------

// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня
// тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день,
// назву дня англійською).

let schedule = +prompt('Enter number of day(from 1 to 7)');

switch(schedule){

    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;
    default:
        console.log('?????????')

}
// -----------------------------------------------
// #uwsz1RnTQJ1
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let number1 = +prompt('Enter number')
let number2 =+prompt("Enter number")
    if (number1 > number2) {
        console.log(number1)
    }
    else if(number1 < number2){
        console.log(number2)
    }

//----------------------------------------------------------------------------
// #iBvqtjEm
//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який,буде присвоювати змінній х значення "default"
// якщо ви намагаєтесь присвоїти в неї falsy-значення
// (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
 let x = true

    if (!x) {
    x = "default";
}
    console.log(x);
//----------------------------------------------------------------------------
//#awLXL6TBzg
//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку
// якщо тривалість довша за 5 місяців вивести в консоль "Супер".
//
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
    ];

if (coursesAndDurationArray[0].monthDuration>5) {
    console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration>5) {
    console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration>5) {
    console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration>5) {
    console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration>5) {
    console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration>5) {
    console.log('Супер');
}