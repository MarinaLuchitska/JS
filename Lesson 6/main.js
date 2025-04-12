// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a = 'hello world';
// let b = 'lorem ipsum';
// let c = 'javascript is cool';
//
// console.log(a.length);
// console.log(b.length);
// console.log(c.length);

// -----------------------------------------------------------------------------
// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'


// let a = 'hello world';
// let b = 'lorem ipsum';
// let c = 'javascript is cool';
//
// console.log(a.toUpperCase());
// console.log(b.toUpperCase());
// console.log(c.toUpperCase());
//

// ----------------------------------------------------------------------------------
// // #ClDsAm7xba7
// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//


// let a = 'HELLO WORLD';
// let b = 'LOREM IPSUM';
// let c = 'JAVASCRIPT IS COOL';
//
// console.log(a.toLowerCase());
// console.log(b.toLowerCase());
// console.log(c.toLowerCase());


// ---------------------------------------------------------------------------------------
// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//


// let str = ' dirty string   ';
// console.log(str.substring(1, 13));

// ---------------------------------------------------------------------------------------
//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']


let str = 'Ревуть воли як ясла повні';

let split = str.split(' ');
console.log(split);

//---------------------------------------------------------------------------------------

// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// let numbers = [10,8,-7,55,987,-1011,0,1050,0];
//
// let str = numbers.map(numbers =>numbers + '');
//
// console.log(str)

// --------------------------------------------------------------------------------------

// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
// function sortNums(arr,direction){
//         if( direction === 'ascending' ){
//             return arr.sort((a, b) => a - b);
//         }
//         if( direction === 'descending' ){
//             return arr.sort((a, b) => b - a);
//         }
//         return '!!!!!!!!!';
//
// }
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));
//

//----------------------------------------------------------------------------------------

// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4} ];


let sort =coursesAndDurationArray .sort((a, b) => {
    return a.monthDuration - b.monthDuration;
});
console.log(sort);
//==================
let filteredUsers = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filteredUsers);
//==================
let id = coursesAndDurationArray.map((value, index) => {
    return {id: index + 1,
        title: value.title,
        monthDuration: value.monthDuration}
})
console.log(id);

// ------------------------------------------------------------------------------
//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {

const suits = [
    { name: 'spade', color: 'black' }, // піки
    { name: 'diamond', color: 'red' }, // бубни
    { name: 'heart', color: 'red' }, // чірво
    { name: 'clubs', color: 'black' } // хресто
];

const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

let cards = [];

    for (let suit of suits){
        for(let value of values){
            cards.push({
                cardSuit: suit.name,
                value : value.values,
                color : suit.color
            })
        }

    }

console.log(cards)
//==================================
let spadeAce = cards.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(spadeAce);
//===================================
let allSixes = cards.filter(card => card.value === '6');
console.log(allSixes);
//====================================
let allRed = cards.filter(card => card.color === 'red');
console.log(allRed);
//===================================
let allDiamond = cards.filter(card => card.cardSuit === 'diamond');
console.log(allDiamond);
//===================================
let allClubs = cards.filter(card => card.cardSuit === 'clubs' && (card.value !== '6' && card.value !== '7' && card.value !== '8'));
console.log(allClubs);

//--------------------------------------------------------------------------------------------
//
// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

const groupedCards = cards.reduce((accumulator, card) => {
    switch (card.cardSuit) {
        case 'spade':
            accumulator.spades.push(card)
            break;
        case 'diamond':
            accumulator.diamonds.push(card)
            break;
        case 'heart' :
            accumulator.hearts.push(card)
            break;
        case 'clubs' :
            accumulator.clubs.push(card)
            break;

    }
    return accumulator;

}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});

console.log(groupedCards);


//-----------------------------------------------------------------------------

// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let courseFinder = [];

for (let course of coursesArray){
        courseFinder.push({
            title: course.title,
            monthDurations : course.monthDuration,
            hourDurations: course.hourDuration,
            modules: course.modules
        })
}

console.log(courseFinder)
let sassCourses = coursesArray.filter(course => course.modules.includes('sass'));
let dockerCourses = coursesArray.filter(course => course.modules.includes('docker'));

console.log("Курси з SASS:", sassCourses);
console.log("Курси з Docker:", dockerCourses);














