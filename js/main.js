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

const numbers = [235, 36, 123, 645, 22, 823, 32, 129, 467, 33, 687, 31];
let total = Number();

// for (const number of numbers) {
//   console.log('-_-', number);
//   total += number;
// }

// ||

for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}

console.log('total:', total);
