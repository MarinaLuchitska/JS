// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name,surname,email,phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone
}

let users = [];

users.push(new User(1, 'kokos', 'fefefe', 'jjjjjkljkj', '12323232442252'));
users.push(new User(3, 'banan', 'Ivffe', 'jjjaaljkj', '98726446726484'));
users.push(new User(5, 'dkdk', 'wwwffv', 'jjjjgggjkj', '5553383338738738'));
users.push(new User(4, 'ejeje', 'wwwwwva', 'jdddkmjkljkj', '44393933u83'));
users.push(new User(2, 'owwowo', 'Khhrhrko', 'ijijijnjn', '666666666666'));
users.push(new User(8, 'Nwjwjjwj', 'Bemmgor', 'aaaaaaaa', '222111111111111'));
users.push(new User(7, 'skskkddj', 'wwofono', 'arrrrrrr', '11111111111'));
users.push(new User(6, 'rrrrrr', 'nwnifni', 'qqqqqqqqqq', '6138389636'));
users.push(new User(10, 'riririr', 'oeooekoe', 'tttttrddsww', '764643643868'));
users.push(new User(9, 'akakak', 'flwlfkfkf', 'rrrewqkqkqkq', '467464493939'));

console.log(users)

// ------------------------------------------------------------------------------------------------------------

// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let evenId = users.filter(filterId)

function filterId(user){
    if(user.id % 2 ===0){
        return true;
    }
        return false;
}


console.log(evenId);


// -----------------------------------------------------------------------------------------------
// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortId = users.sort((a, b) => {
    return a.id - b.id;
});
console.log(sortId);

// -----------------------------------------------------------------------------------------------
// #nkMXISv
// - створити конструктор для об'єктів Client з полями
// id,name, surname ,email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//
function Client(id, name,surname,email,phone,order){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clients = [];

clients.push(new Client(1, 'kokos', 'fefefe', 'jjjjjkljkj', '12323232442252',['banan','kokos']));
clients.push(new Client(3, 'banan', 'Ivffe', 'jjjaaljkj', '98726446726484',['abricos','mango']));
clients.push(new Client(5, 'dkdk', 'wwwffv', 'jjjjgggjkj', '5553383338738738',['strawberry', 'blueberry']));
clients.push(new Client(4, 'ejeje', 'wwwwwva', 'jdddkmjkljkj', '44393933u83', ['cherry', 'plum']));
clients.push(new Client(2, 'owwowo', 'Khhrhrko', 'ijijijnjn', '666666666666',['pineapple', 'avocado']));
clients.push(new Client(8, 'Nwjwjjwj', 'Bemmgor', 'aaaaaaaa', '222111111111111',['banana', 'apple']));
clients.push(new Client(7, 'skskkddj', 'wwofono', 'arrrrrrr', '11111111111',['peach']));
clients.push(new Client(6, 'rrrrrr', 'nwnifni', 'qqqqqqqqqq', '6138389636',['mango']));
clients.push(new Client(10, 'riririr', 'oeooekoe', 'tttttrddsww', '764643643868',['watermelon','ogirok','product']));
clients.push(new Client(9, 'akakak', 'flwlfkfkf', 'rrrewqkqkqkq', '467464493939',['vyshnia','persik']));

console.log(clients)

// ---------------------------------------------------------------------------------------------------------------------
// // #8abtVjRv
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortProduct = clients.sort((a, b) => {
    return a.order.length - b.order.length;
});

console.log(sortProduct)


// --------------------------------------------------------------------------------------------------
// //
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
//   виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//==========================================
// function Car(model,manufacture,year,maxSpeed,engineVolume){
//     this.model =model;
//     this.manufacture = manufacture;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume
//     this.driver = null;
//     this.drive = function(){
//         console.log(`їдемо зі швидкістю ${maxSpeed}км на годину`)
//     }
//     this.info = function(){
//         console.log(`модель: ${this.model}`)
//         console.log(`виробник: ${this.manufacture}`)
//         console.log(`рік випуску: ${this.year}`)
//         console.log(`максимальна швидкість: ${this.maxSpeed}`)
//         console.log(`об'єм двигуна: ${this.engineVolume}`)
//
//     }
//     this.increaseMaxSpeed = function (newSpeed){
//         this.maxSpeed += newSpeed;
//         console.log(`нова максимальна швидкість: ${this.maxSpeed}`)
//     }
//     this.changeYear = function (newValue){
//         this.year = newValue;
//         console.log(`${this.year}`)
//
//     }
//
//     this.addDriver = function(driver){
//         this.driver = driver
//         console.log(`ім'я: ${this.driver.name},вік: ${this.driver.age}`);
//
//     }
// }
// let car1 = new Car('nnn','NNNN','2007',320,35,)
// let driver1 = { name: 'Адріан', age: 35 };
//
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// car1.drive()
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// car1.info()
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// car1.increaseMaxSpeed(100)
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// car1.changeYear('2010')
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// car1.addDriver(driver1);


// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
 class Car{
    constructor(model,manufacture,year,maxSpeed,engineVolume) {
        this.model = model;
        this.manufacture = manufacture;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume
        this.driver = null;
    }
    drive (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed}км на годину`)
    }
    info (){
        console.log(`модель: ${this.model}`)
        console.log(`виробник: ${this.manufacture}`)
        console.log(`рік випуску: ${this.year}`)
        console.log(`максимальна швидкість: ${this.maxSpeed}`)
        console.log(`об'єм двигуна: ${this.engineVolume}`)
    }
    increaseMaxSpeed (newSpeed){
        this.maxSpeed += newSpeed;
        console.log(`нова максимальна швидкість: ${this.maxSpeed}`)
    }
    changeYear (newValue){
        this.year = newValue;
        console.log(`${this.year}`)

    }

    addDriver (driver){
        this.driver = driver
        console.log(`ім'я: ${this.driver.name},вік: ${this.driver.age}`);
    }
}
let car1 = new Car('nnn','NNNN','2007',320,35,)
let driver1 = { name: 'Адріан', age: 35 };

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
car1.drive()
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
car1.info()
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
car1.increaseMaxSpeed(100)
// -- changeYear (newValue) - змінює рік випуску на значення newValue
car1.changeYear('2010')
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
car1.addDriver(driver1);


// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}

let cinderellas = [
    new Cinderella("Саша", 200, 44),
    new Cinderella("Ольга", 150, 41),
    new Cinderella("Маріна", 100, 37)
];

class Prince {
    constructor(name, age, foundShoeSize) {
        this.name = name;
        this.age = age;
        this.foundShoeSize = foundShoeSize;
    }

    info() {
        console.log(`Принц: ім'я - ${this.name}, вік - ${this.age}, розмір туфельки - ${this.foundShoeSize}`);
    }
    findCinderella(cinderellas) {
        for (let cinderella of cinderellas) {
            if (cinderella.footsize === this.foundShoeSize) {
                return cinderella;
            }
        }

    }

}

let prince = new Prince("Адріан", 30, 37);
prince.info();

let matchingCinderella = prince.findCinderella(cinderellas);
    if (matchingCinderella) {
        console.log(`Принц: ${prince.name}, Вік: ${prince.age}`);
        console.log(`Попелюшка, яка підходить: ${matchingCinderella.name}, Вік: ${matchingCinderella.age}, Розмір взуття: ${matchingCinderella.footsize}`);

}
















