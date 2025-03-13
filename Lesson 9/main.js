// #8Nmt60ZT
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//
// const block = document.createElement('div');
// block.classList.add('wrap')
// block.classList.add('collapse')
// block.classList.add('alpha')
// block.classList.add('beta')
// block.innerText = 'blablablablabla';
// document.body.appendChild(block);
// const clonedBlock = block.cloneNode(true);
// document.body.appendChild(clonedBlock);

//     #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// let array = ['Main','Products','About us','Contacts']
// let userInfoUl = document.createElement('ul')
//  for (let arr of array){
//      let userInfoLi = document.createElement('li');
//      userInfoLi.innerText = arr;
//      userInfoUl.appendChild(userInfoLi);
//  }
// document.body.appendChild(userInfoUl);
//
//-----------------------------------------------------------------------------------------------

// #jeBqHV525U5
// - Є масив
//Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//     for (let course of coursesAndDurationArray){
//         let courseInfoDiv = document.createElement('div');
//
//         let h2 = document.createElement('h2');
//         h2.innerText = course.title;
//
//         let p = document.createElement('p')
//         p.innerText = `Тривалість: ${course.monthDuration} місяців`;
//
//         courseInfoDiv.appendChild(h2);
//         courseInfoDiv.appendChild(p);
//
//         document.body.appendChild(courseInfoDiv);
//     }
//
//

//=================================
// #Kx1xgoKy8
// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
//
// ==========================
//
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let course of coursesAndDurationArray) {
    let courseInfoDiv = document.createElement('div');
    courseInfoDiv.classList.add('item');
    let courseInfoH1 = document.createElement('h1');
    courseInfoH1.innerText = course.title;
    courseInfoH1.classList.add('heading');
    let courseInfoP = document.createElement('h1');
    courseInfoP.classList.add('description');
    courseInfoP.innerText = course.monthDuration;

    courseInfoDiv.appendChild(courseInfoH1);
    courseInfoDiv.appendChild(courseInfoP);

    document.body.appendChild(courseInfoDiv);

}