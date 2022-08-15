// Массивы
// Операторы break и continue

// const clients = ['Mango', 'Kiwi', 'Lemon'];
// const clientNameToFind = 'Lemon';
// let message = 'Клиента с таким именем нету в базе данных!';

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }
// }

// console.log(message);

// const numbers = [1, 3, 5, 8, 11, 15, 25, 38, 49, 56, 93, 158, 201, 524, 999];
// const limit = 9;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < limit) {
//     continue;
//   }
//   console.log(`Числa больше чем ${limit}: ${numbers[i]}`);
// }

// Присвоение по ссылке и по значению

// let a = ['Lemon'];
// let b = a;
// let c = b;
// let i = c;

// console.log('a =', a);
// console.log('b =', b);

// a.push('Mango');
// console.log('a =', a);
// console.log('b =', b);

// b.push('Kiwi');
// console.log('a =', a);
// console.log('b =', b);

// c.push('Apple');
// console.log('b =', b);
// console.log('c =', c);

// i.push('Watermelon');
// console.log('c =', c);
// console.log('i =', i);

//

// Методы split() и join()
// const guestName = 'Lemon';
// console.log(guestName.split(''));

// const message = 'Welcome to the home !';
// console.log(message.split(' '));

// const clients = ['Mango', 'Kiwi', 'Lemon'];
// console.log(clients.join(' - '));

// Метод includes() and indexOf()
// const clients = ['Mango', 'Kiwi', 'Lemon'];
// console.log(clients.indexOf('Lemon'));
// console.log(clients.indexOf('Apple'));

// const clients = ['Mango', 'Kiwi', 'Lemon'];
// console.log(clients.includes('Mango'));
// console.log(clients.includes('Watermelon'));

// Проверка множественных условий с includes()
// const fruitMix = ['Mango', 'Kiwi', 'Lemon', 'Apple'];
// const fruit = 'Apple';
// const hasFruit = fruitMix.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is includes`);
// } else {
//   console.log('Fruit is not includes');
// }

// Методы push() и pop()
// const number = [];

// number.push();
// console.log(number);

// number.push(1);
// console.log(number);

// number.push(2);
// console.log(number);

// number.push(3);
// console.log(number);

// number.push(4);
// console.log(number);

// //

// console.log(number.pop());
// console.log(number);

// console.log(number.pop());
// console.log(number);

// console.log(number.pop());
// console.log(number);

// console.log(number.pop());
// console.log(number);

//Метод slice()

// const clients = ['Mango', 'Kiwi', 'Lemon', 'Apple'];
// console.log(clients.slice(1, 3));
// console.log(clients.slice(1));
// console.log(clients.slice(2));
// console.log(clients.slice(3));

// Метод splice() - delete

// const clients = ['Mango', 'Kiwi', 'Lemon', 'Apple'];
// const deleteMass = clients.splice(0, 2);
// console.log(clients);
// console.log(deleteMass);

// Метод splice() - add

// const clients = ['Mango', 'Kiwi', 'Lemon'];
// clients.splice(3, 0, 'Apple');
// clients.splice(4, 0, 'Watermelon');
// console.log(clients);

// rename

// const clients = ['Mango', 'Kiwi', 'Lemon', 'Apple'];
// clients.splice(0, 1, 'Cherry');
// clients.splice(1, 1, 'Watermelon');
// console.log(clients);

// Метод concat()
// const oldClients = ['Mango', 'Kiwi', 'Lemon'];
// const newClients = ['Cherry', 'Watermelon', 'Apple'];

// const allClientsOldFirst = oldClients.concat(newClients);
// console.log(allClientsOldFirst);

// const allClientsNewFirst = newClients.concat(oldClients);
// console.log(allClientsNewFirst);

// console.log(oldClients);
// console.log(newClients);

//

// const clients = ['Mango', 'Kiwi', 'Lemon', 'Apple', 'Cherry', 'Watermelon'];
// for (let i = 0; i < clients.length; i += 1) {
//   clients[i] += `-${i}`;
// }
// console.table(clients);

//

// const cost = [32, 45, 867, 2, 6, 98, 21, 435, 79, 324, 534, 4, 6, 214, 464];
// let total = Number();

// for (let i = 0; i < cost.length; i += 1) {
//   total += cost[i];
//   console.log('+', cost[i]);
// }

// ||

// for (const value of cost) {
//   total += value;
// }

// console.log('Total:', total);

// Ищем нужного клента в базе данных =>

// const clients = ['Mango', 'Kiwi', 'Lemon', 'Apple', 'Cherry', 'Watermelon'];
// const clientToFind = 'Kiwi';
// let message = `Client ${clientToFind} is not find`;

// var - 1

// for (let i = 0; i < clients.length; i += 1) {
//   const client = clients[i];

//   if (client === clientToFind) {
//     message = `Client ${clientToFind} is find`;
//     break;
//   }
// }

// var - 2

// for (const client of clients) {
//   if (client === clientToFind) {
//     message = `Client ${clientToFind} is find`;
//     break;
//   }
// }

// var - 3

// message = clients.includes(clientToFind)
//   ? `Client ${clientToFind} is find`
//   : message;

// console.log(message);

// Найти самое маленькое число

// const numbers = [235, 36, 123, 645, 22, 823, 32, 129, 467, 33, 687, 31];
// let theLittleNumber = numbers[0];

// for (const number of numbers) {
//   if (number < theLittleNumber) {
//     theLittleNumber = number;
//   }
// }

// console.log(theLittleNumber);

// Найти самое большое число

// const numbers = [235, 36, 123, 645, 22, 823, 32, 129, 467, 33, 687, 31];
// let theBigNumber = 0;

// for (const number of numbers) {
//   if (number > theBigNumber) {
//     theBigNumber = number;
//   }
// }

// console.log(theBigNumber);

//

// const numbers = [235, 36, 123, 645, 22, 823, 32, 129, 467, 33, 687, 31];
// let total = Number();

// for (const number of numbers) {
//   console.log('-_-', number);
//   total += number;
// }

// ||

// for (let i = 0; i < numbers.length; i += 1) {
//   total += numbers[i];
// }

// console.log('total:', total);

//

// const numbers = [235, 36, 123, 645, 22, 823, 32, 129, 467, 33, 687, 31];
// let total = 0;

// for (const number of numbers) {
//   total += number;
// }

//

// for (let i = 0; i < numbers.length; i += 1) {
//   total += numbers[i];
// }

// console.log('total:', total);

//

// const mixNumbers = '335-36-123';
// const numbers = mixNumbers.split('-');
// const result = Number(numbers[0]) + Number(numbers[1]) + Number(numbers[2]);
// console.log('result:', result);

//

// const numbers =
//   '235/.,/.,/.,/.,/.,/.,36/.,/.,/.,/.,/.,/.,123/.,/.,/.,/.,/.,/.,645/.,/.,/.,/.,/.,/.,22/.,/.,/.,/.,/.,/.,823/.,/.,/.,/.,/.,/.,32/.,/.,/.,/.,/.,/.,129/.,/.,/.,/.,/.,/.,467/.,/.,/.,/.,/.,/.,33/.,/.,/.,/.,/.,/.,687/.,/.,/.,/.,/.,/.,31';
// const numbersArr = numbers.split('/.,/.,/.,/.,/.,/.,');
// console.log(numbersArr);

//

// const string = 'Hello 1234567890 0987654321';

// const strToArr = string.split('');
// const reverseStrToArr = strToArr.reverse();
// const reverseString = reverseStrToArr.join('');

// ||

// const reverseString = string.split('').reverse().join('');

// console.log(reverseString);

// Избавляемся от повторений

// const numbers = [
//   235, 36, 123, 645, 22, 823, 32, 129, 467, 33, 687, 31, 123, 22, 129, 687, 22,
//   235, 32, 687, 129, 687, 33, 823, 22, 645, 22,
// ];
// const result = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   const checkIndex = numbers.indexOf(numbers[i]);
//   if (i === checkIndex) {
//     result.push(numbers[i]);
//   }
// }

// console.log(numbers);
// console.log(result);

//

// const oldNumbers = [
//   235, 36, 123, 645, 22, 823, 32, 129, 467, 33, 687, 31, 123, 22, 129, 687, 22,
//   235, 32, 687, 129, 687, 33, 823, 22, 645, 22,
// ];
// const newNumbers = [];

// for (let i = 0; i < oldNumbers.length; i += 1) {
//   const checkIndex = oldNumbers.indexOf(oldNumbers[i]);
//   if (i === checkIndex) {
//     newNumbers.push(oldNumbers[i]);
//   }
// }

// console.log('Номера до сортировки:', oldNumbers);
// console.log('Номера после сортировки:', newNumbers);

//

// Функции =>

// простая формула калькуляции

// function calculation(x, y, z) {
//   console.log(`Рузультат выражения: ${(x + y) * z}`);

// return (x + y) * z;

// console.log('non');
// }

// console.log('pre');
// calculation(100, 53, 4);
// console.log('next');

//

// function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//     total *= argument;
//   }

//   return total;
// }

// console.log('result:', multiply(100, 4));
// console.log('result:', multiply(200, 4));
// console.log('result:', multiply(400, 4));

// Снятие денег в банкомате

// function withdraw(amount, balance) {
//   if (amount <= 0) {
//     console.log('Введите сумму больше 0');
//   } else if (amount > balance) {
//     console.log('Недостаточно средств на балансе для совершения операции');
//   } else {
//     console.log('Операция выполнена успешно');
//   }
// }

// withdraw(501, 500);

// ||

// function withdraw(amount, balance) {
//   if (amount <= 0) {
//     console.log('Введите сумму больше 0');
//     return;
//   }

//   if (amount > balance) {
//     console.log('Недостаточно средств на балансе для совершения операции');
//     return;
//   }

//   console.log('Операция выполнена успешно');
// }

// withdraw(1242, 500);

//

// function fnA() {
//   console.log('Лог внуртри функции fnA до вызова fnB ---1');
//   fnB();
//   console.log('Лог внуртри функции fnA после вызова fnB ---2');
// }

// function fnB() {
//   console.log('Лог внутри функции fnB ---3');
// }

// console.log('Лог перед вызовом fnA ---4');
// fnA();
// console.log('Лог после вызова fnA ---5');

//

// const clients = ['Mango', 'Kiwi', 'Lemon', 'Apple', 'Cherry', 'Watermelon'];

// const clientsToFind = function (allClients, clientsToFind) {
//   return allClients.includes(clientsToFind)
//     ? `Пользователь ${clientsToFind} найден`
//     : `Пользователь ${clientsToFind} не найден`;
// };

// console.log(clientsToFind(clients, 'Lemon'));
// console.log(clientsToFind(clients, 'lhjkl3'));
// console.log(clientsToFind(clients, 'Cherry'));
// console.log(clientsToFind(clients, 'lmwb6d'));
// console.log(clientsToFind(clients, 'Kiwi'));

// ||

// const clients = ['Mango', 'Kiwi', 'Lemon', 'Apple', 'Cherry', 'Watermelon'];

// const clientsToFind = function (allClients, clientsToFind) {
//   for (const client of allClients) {
//     if (client === clientsToFind) {
//       return `Client ${clientsToFind} is find`;
//     }
//   }
//   return `Client ${clientsToFind} is not find`;
// };

// console.log(clientsToFind(clients, 'Lemon'));
// console.log(clientsToFind(clients, 'lhjkl3'));
// console.log(clientsToFind(clients, 'Cherry'));
// console.log(clientsToFind(clients, 'lkm2'));
// console.log(clientsToFind(clients, 'lkm2333s'));
// console.log(clientsToFind(clients, 'Kiwi'));

//
// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }

//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }

//   return 'The order is accepted, our manager will contact you';

//   // Change code above this line
// }

//

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// // Change code below this line

// const firstElement = ['apple'];
// const secondElement = ['plum'];
// const lastElement = ['orange'];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// const planets = ['Earth', 'Mars', 'Venus'];
// console.log(planets);

// const fruits = ['apple', 'peach', 'pear', 'banana'];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[-1];

// console.log(lastElementIndex);
// console.log(lastElement);

// const planets = ['Earth', 'Mars', 'Venus'];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

//

// Объекты =>

// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: {
//     country: 'Jamaica',
//     city: 'Ocho Rios',
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// console.log(user);

// //

// const client = {
//   name: 'Ivan',
//   surname: 'Dovhopol',
//   location: {
//     country: 'Ukraine',
//     city: 'Kyiv',
//   },
//   info: {
//     age: 20,
//     growth: 183.5,
//     hobbies: ['swiming', 'music', 'sci-fi'],
//   },
// };

// console.log(client);

// const clientSurname = client.surname;
// console.log('Surname:', clientSurname);

// const clientAge = client.info.age;
// console.log('Age:', clientAge);

// const clientLocationCountry = client.location.country;
// console.log('Country:', clientLocationCountry);

// console.log('<------------Or----------->');

// console.log('Surname:', client['surname']);

// console.log('Age:', client.info['age']);

// console.log('Country:', client.location['country']);

//

// client.location.country = 'qwe';
// console.log('Country:', client.location.country);

// client.info.hobbies.push('travel', 'qwe', 'sdkhjgkjsdhg');
// console.log(client.info.hobbies);

//

// client.info.language = ['en', 'ua', 'ru'];
// console.log(client);

// Вычисляемые свойства

// const name = 'name';
// const surname = 'surname';
// const age = 'age';

// const client = {
//   [name]: 'Ivan',
//   [surname]: 'Dovhopol',
//   [age]: 20,
// };

// console.log(client.name);
// console.log(client.surname);
// console.log(client.age);

// Методы объекта

// const fruitsShop = {
//   fruits: ['Kiwi', 'Mango', 'Lemon'],
//   getFruits() {
//     console.log('Этот метод возвращает все фрукты - свойство fruits');
//   },
//   addFruits() {
//     console.log('Этот метод добавляет все фрукты в свойство fruits');
//   },
// };

// fruitsShop.getFruits('Lemon');
// fruitsShop.addFruits('Apple');

// console.log(fruitsShop);

// Доступ к свойствам объекта в методах

// const fruitsShop = {
//   fruits: ['Kiwi', 'Mango', 'Lemon'],
//   fruitExpirationDate: '1 month',
//   getFruit() {
//     console.log(this);
//   },
// };

// fruitsShop.getFruit();

//

// const fruitsShop = {
//   fruits: ['Kiwi', 'Mango', 'Lemon'],
//   getFruits() {
//     return this.fruits;
//   },
//   addFruits(fruitsName) {
//     this.fruits.push(fruitsName);
//   },
//   removeFruits(fruitsName) {
//     const fruitsIndex = this.fruits.indexOf(fruitsName);
//     this.fruits.splice(fruitsIndex, 1);
//   },
// };

// console.log('Фруктов вначале:', fruitsShop.getFruits());

// fruitsShop.addFruits('Apples');
// fruitsShop.addFruits('Watermelon');
// console.log('После завоза:', fruitsShop.getFruits());

// fruitsShop.removeFruits('Kiwi');
// fruitsShop.removeFruits('Lemon');
// console.log('Остаток после удаления:', fruitsShop.getFruits());

//

// const fruitsShop = {
//   fruits: ['Banana', 'Lemon', 'Watermelon'],
//   getFruits() {
//     return this.fruits;
//   },

//   addFruits(fruitsName) {
//     this.fruits.push(fruitsName);
//   },

//   removeFruits(fruitsName) {
//     const fruitIndex = this.fruits.indexOf(fruitsName);
//     this.fruits.splice(fruitIndex, 1);
//   },
// };

// console.log(fruitsShop.getFruits());

// fruitsShop.addFruits('Kiwi');
// fruitsShop.addFruits('Apples');
// console.log(fruitsShop.getFruits());

// fruitsShop.removeFruits('Banana');
// console.log(fruitsShop.getFruits());

//

// const fruitsShop = {
//   fruits: ['Watermelon' , 'Kiwi', 'Apples'],

//   getFruits() {
//     return this.fruits;
//   },

//   addFruits(fruitsName) {
//     this.fruits.push(fruitsName);
//   },

//   removeFruits(fruitsName) {
//     const fruitsIndex = this.fruits.indexOf(fruitsName);
//     this.fruits.splice(fruitsIndex, 1);
//   },
// };

// console.log(fruitsShop.getFruits());

// fruitsShop.addFruits('Bananas');
// fruitsShop.addFruits('Lemons');
// console.log(fruitsShop.getFruits());

// fruitsShop.removeFruits('Kiwi');
// fruitsShop.removeFruits('Apples');
// console.log(fruitsShop.getFruits());

//

// const watermelon = {
//   theWeight: '2kg',
//   quantity: 1,
//   price: '2$',
//   areAvailable: true,
// };

// for (const key in watermelon) {
//   console.log(`watermelon ${key}:`, watermelon[key]);
// }

// Метод hasOwnProperty()

// const fruit = {
//   theWeight: '1kg',
// };

// const apple = Object.create(fruit);
// apple.name = 'api';

// console.log(apple);
// console.log('apple name:', apple.name);
// console.log('the weight apple:', apple.theWeight);

// console.log(apple.hasOwnProperty('name'));
// console.log(apple.hasOwnProperty('theWeight'));

//

// const watermelon = {
//   theWeight: '2kg',
//   quantity: 1,
//   price: '2$',
//   areAvailable: true,
// };

// for (const key in watermelon) {
//   if (watermelon.hasOwnProperty([key])) {
//     console.log(`watermelon ${key}:`, watermelon[key]);
//   }
// }

// Метод Object.values()

// const watermelon = {
//   theWeight: '2kg',
//   quantity: 1,
//   price: '2$',
//   areAvailable: true,
// };

// const keys = Object.keys(watermelon);
// const values = Object.values(watermelon);

// console.log(keys, values);

//

// const fruits = {
//   mango: 33,
//   lemons: 67,
//   watermelons: 6,
//   kiwi: 39,
//   apples: 94,
// };

// const values = Object.values(fruits);
// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log('total quantity:', total);

// Метод Object.entries()

// const fruits = {
//   mango: 33,
//   lemons: 67,
//   watermelons: 6,
//   kiwi: 39,
//   apples: 94,
// };

// const entries = Object.entries(fruits);
// console.table(entries);

// Массив обьектов

// const watermelons = [
//   {
//     theWeight: '2kg',
//     quantity: 1,
//     price: '2$',
//     areAvailable: true,
//   },
//   {
//     theWeight: '3kg',
//     quantity: 2,
//     price: '5$',
//     areAvailable: false,
//   },
//   {
//     theWeight: '4kg',
//     quantity: 3,
//     price: '7$',
//     areAvailable: true,
//   },
// ];

// for (const watermelon of watermelons) {
//   watermelon.theWeight;
//   watermelon.quantity;
//   watermelon.price;
//   watermelon.areAvailable;
// }

//

// const watermelons = [
//   {
//     theWeight: '2kg',
//     quantity: 1,
//     price: '2$',
//     areAvailable: true,
//   },
//   {
//     theWeight: '3kg',
//     quantity: 2,
//     price: '5$',
//     areAvailable: false,
//   },
//   {
//     theWeight: '4kg',
//     quantity: 3,
//     price: '7$',
//     areAvailable: true,
//   },
// ];

// const fruitName = [];

// for (const watermelon of watermelons) {
//   fruitName.push(watermelon.price);
// }

// console.log(fruitName);

//

// const clients = [
//   'Lemon',
//   'Kiwi',
//   'Watermelon',
//   'Apple',
//   'Lemon',
//   'Apple',
//   'Kiwi',
//   'Watermelon',
//   'Apple',
//   'Lemon',
//   'Kiwi',
//   'Apple',
//   'Lemon',
//   'Apple',
//   'Apple',
//   'Watermelon',
// ];

// const stats = {};

// for (const client of clients) {
// if (stats[client]) {
//   stats[client] += 1;
// } else {
//   stats[client] = 1;
// }

// ||

//   stats[client] ? (stats[client] += 1) : (stats[client] = 1);
// }

// console.log(stats);

//

// const username = prompt('Write your name');
// const userEmail = prompt('Write your email');

// const userLogin = {
//   username,
//   userEmail,
// };

// console.log(userLogin);

//

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const productValues = [];

//   for (const product of products) {
//     if (product[propName]) {
//       productValues.push(product[propName]);
//     }
//   }

//   return productValues;
// }
// console.log('product name:', getAllPropValues('name'));
// console.log('product price:', getAllPropValues('price'));
// console.log('product quantity:', getAllPropValues('quantity'));

//

// const mass = [
//   2, 57, 8764, 45, 756, 2345, 86, 9, 76, 3463, 7, 9, 670, 4, 67, -569, 92, 30,
//   8, -4, 54, 546, 4, 60,
// ];

// console.log(...mass);
// console.log(Math.max(...mass));
// console.log(Math.min(...mass));

// let total = 0;

// for (const value of mass) {
//   total += value;
// }
// console.log('total:', total);

// spread: создание нового массива

// const mass1 = [1, 2, 3, 4, 5];
// const mass2 = [6, 7, 8, 9, 0];
// const massAll = [...mass1, ...mass2];
// console.log(massAll);

//

// const fruitsShop = {
//   quantity: 99,
//   price: 5699,
// };

// const { quantity, price, link = 'htpps:123123123.html' } = fruitsShop;

// console.log(link);

// Деструктуризация в циклах

// const watermelons = [
//   {
//     theWeight: '2kg',
//     quantity: 1,
//     price: '2$',
//     areAvailable: true,
//   },
//   {
//     theWeight: '3kg',
//     quantity: 2,
//     price: '5$',
//     areAvailable: false,
//   },
//   {
//     theWeight: '4kg',
//     quantity: 3,
//     price: '7$',
//     areAvailable: true,
//   },
// ];

// for (const watermelon of watermelons) {
//   console.log(watermelon.theWeight);
//   console.log(watermelon.quantity);
//   console.log(watermelon.price);
//   console.log(watermelon.areAvailable);
// }

// ||

// for (const { theWeight, quantity, price, areAvailable } of watermelons) {
//   console.log(theWeight);
//   console.log(price);
//   console.log(quantity);
//   console.log(areAvailable);
// }

//

// const client = {
//   name: 'Ivan',
//   surname: 'Dovhopol',
//   location: {
//     country: 'Ukraine',
//     city: 'Kyiv',
//   },
//   info: {
//     age: 20,
//     growth: 183.5,
//     hobbies: ['swiming', 'music', 'sci-fi'],
//   },
// };

// console.log(client);

// const {
//   name,
//   surname,
//   location: { country: clientCountry, city: clientCity },
//   info: { age: clientAge, growth: clientGrowth, hobbies: clientHobbies },
// } = client;

// console.log(name);
// console.log(surname);
// console.log(clientCountry);
// console.log(clientAge);
// console.log(clientHobbies);

//

// const rgb = [155, 90, 252];
// const [red, green, blue] = rgb;
// console.log(rgb);

// console.log(`R:${red}, G:${green}, B:${blue}`);

//

//

// Pефакторинг методов объекта =>

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       const { name } = potion;
//       if (name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     const { potions } = this;

//     for (let i = 0; i < potions.length; i += 1) {
//       const { name } = this.potions[i];
//       if (name === potionName) {
//         return potions.splice(i, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     const { potions } = this;
//     for (let potion of potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };

// console.log(atTheOldToad);
