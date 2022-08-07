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
