// TASK 1 =>

// const nameJs = 'ECMAScript';
// const result = prompt('Какое официальное название JavaScript?');

// if (result === nameJs) {
//   console.log('Верно!');
// } else {
//   console.log('Не знаете? ECMAScript!');
// }

// TASK 2 =>

// const hours = 14;
// const minutes = 0;
// let timestring;

// if (minutes > 0) {
//   timestring = `${hours}:${minutes}`;
// } else {
//   timestring = `${hours}h`;
// }

// console.log(timestring);

// TASK 3 =>

// const result = prompt('Введи число!');

// if (parseInt(result) > 0) {
//   console.log('Это положительное число!');
// } else if (parseInt(result) < 0) {
//   console.log('Это отрицательное число!');
// } else if (parseInt(result) === 0) {
//   console.log('Это 0');
// } else {
//   console.log('Напиши цифры!');
// }

// TASK 4

// const a = 10;
// const b = 19;
// let maxNumber;

// if (a >= 100 && b >= 100) {
//   if (a > b) {
//     console.log(a);
//   } else if (a < b) {
//     console.log(b);
//   } else {
//     console.log('a = b');
//   }
// } else {
//   console.log(b + 512);
// }

// TASK 5

// let link = 'https://my-site.com/about';
// if (!link.endsWith('/')) {
//   link = `${link}/homework-1`;
// }
// console.log(link);

// TASK 6

// let link = 'https://somesite.com/about/my-site';
// if (!link.endsWith('/') && link.includes('my-site')) {
//   link = `${link}/index.html`;
// }
// console.log(link);

// TASK 7

// let link = 'https://somesite.com/about';

// const result = !link.endsWith('/') ? (link += '/index.html') : link;
// console.log(result);

// TASK 8

// const hours = 144;

// if (hours < 17) {
//   console.log('Pending');
// } else if (hours >= 17 && hours <= 24) {
//   console.log('Expires');
// } else {
//   console.log('Overdue');
// }

// TASK 9

// const daysUntilDeadline = 3;
// variable - 1

// if (parseInt(daysUntilDeadline) === 0) {
//   console.log('Дедлайн сегодня, поспеши!');
// } else if (parseInt(daysUntilDeadline) === 1) {
//   console.log('Дедлайн завтра, ускоряйся!');
// } else if (parseInt(daysUntilDeadline) === 2) {
//   console.log('Дедлайн послезавтра, подтягивайся!');
// } else if (parseInt(daysUntilDeadline) <= 10) {
// console.log('Дедлайн скоро!');
// } else {
//   console.log('Дедлайн еще не скоро!');
// }

// Task 10

// const daysUntilDeadline = 3;

// switch (daysUntilDeadline) {
//   case 0:
//     console.log('Дедлайн сегодня, поспеши!');
//     break;

//   case 1:
//     console.log('Дедлайн завтра, ускоряйся!');
//     break;

//   case 2:
//     console.log('Дедлайн послезавтра, подтягивайся!');
//     break;

//   default:
//     console.log('Дедлайн скоро!');
// }

// TASK 11

// const max = 150;
// const min = 106;

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// Task 12

// let login;
// let password;

// do {
//   login = prompt('write login');

//   if (login === 'admin') {
//     password = prompt('write password');

//     if (!password) {
//       console.log('canceled');
//     } else if (password !== 'i am admin') {
//       console.log('access closed');
//     } else {
//       console.log('welcome');
//     }
//   }
// } while (login !== 'admin' && password !== 'i am admin');
