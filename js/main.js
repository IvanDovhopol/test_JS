// const yearOfBirth = 2002;
// console.log(yearOfBirth);

// const yearToday = 20;
// console.log(yearToday);

// const dateNow = 22.07;
// console.log(dateNow);

// const price = 10;
// console.log(price);

// let age;
// console.log(age);

// age = 14;
// console.log(age);

// age = 15;
// console.log(age);

// age = 18;
// console.log(age);

// // КОНСТАНТЫ
// const COLOR_TEAL = '#009688';

// // ПРИМИТИВНЫЕ ТИПЫ
// // Number
// const points = 19.99;
// console.log(points);

// //String
// const username = 'Ivan';
// console.log(username);

// const description = 'Wellcome!';
// console.log(description);

// //Boolean
// const isModalOpen = false;
// const theTableClear = false;
// const isLampOn = true;
// console.log(isModalOpen, isLampOn);

// // null
// let selectedProduct = null;
// console.log(selectedProduct);

// // undefined
// let surname;
// console.log(typeof surname);

// // ВЗАЕМОДЕЙСТВИЕ С ПОЛЬЗОВАТЕЛЕМ
// // Вывод данных
// const message = 'hello world!';
// console.log(message);

// const fullname = 'Ivan Dovhopol';
// console.log('name:', fullname);

// // const prewiew = 'Добро пожаловать на страницу!';
// // alert(prewiew);

// // Получение данных
// // const isPerson = confirm('Подтвердите действие на странице');
// // console.log(isPerson);

// // const userLogin = prompt('Напишите ваше имя');
// // console.log(userLogin);

// // Математические операторы
// const x = 200;
// const y = 100;
// console.log(x / y);

// let value = 50;
// value += 25;
// console.log(value);

// const a = 50;
// const b = 25;
// const c = 10;
// console.log('a > b:', a > b);
// console.log('c == a:', c == a);
// console.log('a !== b:', a !== b);
// console.log(a === 'a');

// // Числа
// const valueA = 75;
// console.log(Number(valueA));
// console.log(typeof Number(valueA));

// const valueB = 'Lorem ipsum';
// console.log(Number(valueB));
// console.log(typeof Number(valueB));

// // Методы Number.parseInt() и Number.parseFloat()
// // парсит из строки целое число
// console.log(Number.parseInt('1222asdgsdg234sdg'));
// console.log(Number.parseInt('123.123sfdhgdfhg'));
// console.log(Number.parseInt('wasdfg'));

// // парсит из строки дробное число
// console.log(Number.parseFloat('456sfdhgsdr234ghg'));
// console.log(Number.parseFloat('123.123 dfhgfdsh456'));
// console.log(Number.parseFloat('qweqweq'));

// // Проверка на число
// const validNumber = Number('51');
// console.log(Number.isNaN(validNumber));

// const invalidNumber = Number('qweqweqwe');
// console.log(Number.isNaN(invalidNumber));

// // Сложение чисел с плавающей точкой
// console.log(0.2 + 0);
// console.log(0.7 + 0);

// console.log('0.1 + 0.9 =', 0.1 + 0.9);
// console.log('0.2 + 0.8 =', 0.2 + 0.8);
// console.log('0.3 + 0.7 =', 0.3 + 0.7);
// console.log('0.4 + 0.6 =', 0.4 + 0.6);
// console.log('0.5 + 0.5 =', 0.5 + 0.5);
// console.log('0.6 + 0.4 =', 0.6 + 0.4);
// console.log('0.7 + 0.3 =', 0.7 + 0.3);
// console.log('0.8 + 0.2 =', 0.8 + 0.2);
// console.log('0.9 + 0.1 =', 0.9 + 0.1);

// console.log(0.2 + 0.7);
// console.log((0.2 + 0.7).toFixed(1));

// // Класс Math
// console.log(Math.floor(2.1));
// console.log(Math.ceil(1.0000001));
// console.log(Math.round(1.6));
// console.log(Math.max(45, 324, 55, 101));
// console.log(Math.min(34, 98, 21, 456));
// console.log(Math.pow(5, 2));
// console.log(Math.random() * 10);

// // Конкатенация строк
// const sms = 'Hello' + ' ' + 'world' + '!';
// console.log(sms);

// console.log(1 + 1 + '5');
// console.log('5' + 1 + 1);
// console.log(1 + '5' + 1);

// // Шаблонные строки
// const guestName = 'Ivan';
// const roomNumber = 99;
// const greeting = `Hello ${guestName}, your room number - ${roomNumber}!`;
// console.log(greeting);

// // Свойства и методы строк
// const textA = 'Lorem ipsum dolor';
// console.log(textA.length + 'Lorem ipsum dolor'.length);
// console.log(textA.toLowerCase());
// console.log(textA.toUpperCase());
// console.log(textA.indexOf('ipsum'));
// console.log(textA.includes('Lorem'));
// console.log(textA.includes('lorem'));
// console.log(textA.endsWith('dolor'));

// // Методы replace() и replaceAll()
// const cssStyleNames = 'hero.css, header.css, footer.css';
// const scssStyleNames = cssStyleNames.replaceAll('css', 'scss');
// console.log(scssStyleNames);

// // Логические операторы
// console.log(5 && 4);
// console.log('Ivan' && '');

// console.log(true || false);
// console.log(1 || 2);

// const isOnline = true;
// console.log(!isOnline);
// console.log(!'');

// // Ветвление

// // Инструкция if
// let price = 'close';
// const sub = 'Vip';

// if (sub === 'Vip') {
//   price = 'open';
// }

// console.log(price);

// Инструкция if ... else
// let access;
// const sub = 'Pro';

// // if (sub === 'Pro') {
//   access = 'open';
// } else {
//   access = 'close';
// }

// console.log(access);

// // Инструкция else ... if
// let cost;
// const sub = 'premium';

// if (sub === 'free') {
//   cost = 0;
// } else if (sub === 'pro') {
//   cost = 50;
// } else if (sub === 'premium') {
//   cost = 100;
// } else {
//   console.log('access close');
// }

// console.log(cost);

// let apples;
// const theWeight = 10;

// if (theWeight === 2) {
//   apples = 20;
// } else if (theWeight === 5) {
//   apples = 50;
// } else if (theWeight === 9) {
//   apples = 90;
// } else if (theWeight === 10) {
//   apples = 100;
// } else {
//   console.log('invalid weight');
// }

// console.log(apples);

// let type;
// const age = 18;

// if (age >= 18) {
//   type = 'access open';
// } else {
//   type = 'access close';
// }

// console.log(type);

// const age = 14;
// const type = age >= 18 ? 'mid' : 'jun';
// console.log(type);

// const num1 = 100;
// const num2 = 150;
// let numBig;

// if (num1 > num2) {
//   numBig = num1;
// } else if (num2 > num1) {
//   numBig = num2;
// }

// console.log(numBig);

// const numBig = num1 > num2 ? num1 : num2;
// console.log(numBig);

// // Инструкция switch
// let cost;
// const sub = 'premium';

// switch (sub) {
//   case 'free':
//     cost = 0;
//     break;

//   case 'pro':
//     cost = 100;
//     break;

//   case 'premium':
//     cost = 500;
//     break;

//   default:
//     console.log('invalid cost');
// }

// console.log(cost);

// Цикл while
// let counter = 0;
// while (counter < 5) {
//   console.log('counter:', counter);
//   counter += 1;
// }

// let clientCouter = 0;
// const maxClients = 25;

// while (clientCouter <= maxClients) {
//   console.log(clientCouter);
//   clientCouter += 1;
// }

// let userLogin = '';
// let userPassword = '';

// do {
//   userLogin = prompt('Введите свой логин', '');
//   userPassword = prompt('Пароль должен содержать не менее 4 символов', '');
// } while (userLogin.length < 4);

// console.log('Вы ввели логин:', userLogin);
// console.log('Вы ввели пароль:', userPassword);

// Цыклы
// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//     sum += i;
// }

// console.log(sum);

// const max = 10;

// for (let i = 0; i < max; i += 1) {
//     console.log(`${max} % ${i}`, max % i)
// }

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);
//   if (i === 3) {
//     console.log('log up');
//     break;
//   }
// }

// console.log('log down');

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
// }

// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch (country) {
//     case 'China':
//       console.log('Shipping to China will cost 100 credits');
//       break;

//     case 'Chile':
//       console.log('Shipping to Chile will cost 250 credits');
//       break;

//     case 'Australia':
//       console.log('Shipping to Australia will cost 170 credits');
//       break;

//     case 'Jamaica':
//       console.log('Shipping to Jamaica will cost 120 credits');
//       break;

//     // case 'Germany':
//     //   console.log('Sorry, there is no delivery to your country');
//     //   break;

//     // case 'Sweden':
//     //   console.log('Sorry, there is no delivery to your country');
//     //   break;

//     default:
//       console.log('Sorry, there is no delivery to your country');
//   }
//   // Change code above this line
//   return message;
// }
