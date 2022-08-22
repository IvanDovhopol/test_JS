// №1 ======================================= <|> Получаем доступ к кнопке <|>

// const doctypeButton = document.querySelector('.js-button');

// doctypeButton.addEventListener('click', () =>
//   console.log('Клик по кнопке:', Date.now()),
// );

// №2 ======================================= <|> Получаем геоданные пользователя <|>

// const onGetPositionSuccess = position => {
//   console.log('Ваша позиция');
//   console.log('success:', position);
// };

// const onGetPositionError = error => {
//   console.log('error:', error);
// };

// window.navigator.geolocation.getCurrentPosition(
//   onGetPositionSuccess,
//   onGetPositionError,
// );

// №3 ======================================= <|> Временные интервалы <|>

// const callbek = () =>
//   console.log('Эта функция выполнится после 2 секунд', Date.now());

// console.log('Pre');
// setTimeout(callbek, 2000);
// setTimeout(callbek, 2050);
// setTimeout(callbek, 2100);
// setTimeout(callbek, 2150);
// setTimeout(callbek, 2200);
// setTimeout(callbek, 2250);
// setTimeout(callbek, 2300);
// setTimeout(callbek, 2350);

// console.log('Next ...');

//  =====================NX================== <|> получаем доступ к html <|>

// const counter = {
//   value: 0,
//   increment() {
//     this.value += 1;
//   },
//   decrement() {
//     this.value -= 1;
//   },
// };

// const incrementBtn = document.querySelector('.js-increment');
// const decrementBtn = document.querySelector('.js-decrement');
// const valueEl = document.querySelector('.value');

// incrementBtn.addEventListener('click', () => {
//   if (counter.value <= -1) {
//     console.log('error');
//   } else {
//     console.log('Up');
//   }

//   counter.increment();
//   valueEl.textContent = counter.value;
// });

// decrementBtn.addEventListener('click', () => {
//   if (counter.value <= 0) {
//     console.log('error');
//   } else {
//     console.log('down');
//   }

//   counter.decrement();
//   valueEl.textContent = counter.value;
// });
