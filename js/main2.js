// Module 5 =>

//                                          - Колбэк-функции
// function user(name) {
//   return `My name is ${name}!`;
// }

// console.log(user);
// console.log(user('qwe'));

// function registerFoo(name, collbek) {
//   console.log(`Register guest ${name}`);
//   collbek(name);
// }

// registerFoo('Ivan', user);

//

// function processCall(client) {
//   const randomTimeNumber = Math.random() > 99;

//   if (!removeEventListener) {
//     console.log(
//       `Абонент ${client} сейчас занят, оставьте сообщение после сигнала ...`,
//     );
//   } else {
//     console.log(`Соеденяю с абонентом ${client}, ожидайте ...`);
//   }
// }

// processCall('Ivan');

//

// function processCall(client, onAvailable, onNotAvailable) {
//   const isClientAvailable = Math.random() > 0.5;

//   if (!removeEventListener) {
//     onNotAvailable(client);
//     return;
//   }

//   onAvailable(client);
// }

// function takeCall(name) {
//   console.log(`Соеденяю с абонентом ${name}, ожидайте ...`);
// }

// function acvivateAnsveredComuter(name) {
//   console.log(
//     `Абонент ${name} занят, пожалуйста, оставьте сообщение после сигнала ...`,
//   );
// }

// function activateComputerHolograma(name) {
//   console.log(
//     `Абонент ${name} сейчас занят, но вы можете оставить ему сообщение галограммой после сигнала ...`,
//   );
// }

// processCall('Lemon', takeCall, activateComputerHolograma);
// processCall('Kiwi', takeCall, acvivateAnsveredComuter);

//

// function num(values) {
//   console.log(values);
// }

// function repeat(n, action) {
//   for (let i = 0; i <= n; i += 1) {
//     action(i);
//   }
// }

// repeat(9, num);

//

// const numbers = [5, 10, 20, 50, 80, 55, 99, 346, 12, 2];

// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`for...of => Index ${i}, number ${numbers[i]}`);
// }

// numbers.forEach(function (number, index) {
//   console.log(`forEach => Index ${index}, number ${number}`);
// });

//                                          - Стрелочные функции =>

// const foo = (a, b, c) => {
//   return a + b + c;
// };

// console.log(foo(1, 2, 3));

//

// const add = a => {
//   return a + 199;
// };

// console.log(add(1));

//

// const foo = () => {
//   console.log('qweqwe');
// };

// foo();

//                                          - Неявный возврат

// const foo = (a, b, c) => a + b + c;
// console.log(foo(33.33, 33.33, 33.33));

// --------------     (;     -------------- - Псевдомассив arguments

// const add = (...args) => {
//   console.log(args);
// };

// add(1, 2, 3, 4, 5, 6, 7, 8, 9);

//

// const numbers = [34, 6, 8, 344, 6, 8, 9, 34, 8, 6, 3, 8, 2, 46, 5];

// numbers.forEach((number, index) => {
//   console.log(`Index: ${index}; number: ${number};`);
// });

// --------------     (;     -------------- - Декларативное программирование

// const numbers = [34, 6, 8, 344, 6, 8, 9, 34, 8, 6, 3, 8, 2, 46, 5];
// const numbersFiltered = numbers.filter(value => value > 6);
// console.log(numbersFiltered);

//

// const foo = (a, b, callback) => {
//   const result = callback(a, b);
//   console.log(`${callback}; result:`, result);
// };

// foo(5, 21, (x, y) => x + y);
// foo(40, 21, (x, y) => x - y);
// foo(5, 70, (x, y) => x * y);
// foo(100, 4, (x, y) => x / y);

//

const onGetPositionSuccess = position => {
  console.log('Ваша позиция');
  console.log('success:', position);
};

const onGetPositionError = error => {
  console.log('error:', error);
};

window.navigator.geolocation.getCurrentPosition(
  onGetPositionSuccess,
  onGetPositionError,
);
