//  =====================NX================== <|> Навигация по DOM <|>

// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);

//  =====================NX================== <|> Придумал логику для рандомного доступа к кнопке <|>

// const btnIncrement = document.body.querySelector('.js-increment');
// const btnDecrement = document.body.querySelector('.js-decrement');

// function test(max) {
//   const random = Math.floor(Math.random() * max);
//   if (random > 50) {
//     btnIncrement.style.color = '#fff';
//     btnIncrement.style.backgroundColor = 'red';
//     btnIncrement.style.borderRadius = '50px';
//     btnIncrement.style.border = 'none';
//     return random;
//   } else {
//     btnDecrement.style.color = '#fff';
//     btnDecrement.style.backgroundColor = 'green';
//     btnDecrement.style.borderRadius = '50px';
//     btnDecrement.style.border = 'none';
//     return random;
//   }
// }

// console.log('random number:', test(100));

//  =====================NX================== <|> Свойство textContent <|>

// const title = document.body.querySelector('.article-title');
// console.log('Pre:', title.textContent);
// title.textContent = 'Hello world';
// console.log('Next:', title.textContent);

// const text = document.body.querySelector('.article-text');
// text.textContent = 'Сдесь должен быть текст!';

//  =====================NX================== <|> Свойство classList <|>

// const text = document.querySelector('#paragraph');

// // Ищем интересующий класс // Возвращает true, если нашло и false если не нашло.
// const findClass = text.classList.contains('blue');
// console.log('findClass :>> ', findClass);

// // Добавляем класс к нашему тексту
// const addClass = text.classList.add('small');

// // Удаляем класс из списка
// const removeClass = text.classList.remove('text');

// // Удаляем сласс если он есть, если нет - добавляем
// const toggleClass = text.classList.toggle('big');

// // Переименовуем название класа
// const replaceClass = text.classList.replace(
//   /* oldName */ 'red',
//   /* newName */ 'green',
// );

// console.log('text :>> ', text);

//  =====================NX================== <|> Атрибуты <|>

// const image = document.querySelector('.image');
// console.log(image);

// // Проверяет наличие атрибута. Возвращает true или false
// console.log(image.hasAttribute('alt'));

// // Возвращает вызваный атрибут
// console.log(image.getAttribute('width'));

// // Добавляет атрибут со значением
// console.log(image.setAttribute('src', '../README.md'));

// // Удаляет атрибут
// console.log(image.removeAttribute('href'));

//  =====================NX================== <|> мой алгоритм только через data-атрибуты <|>

// const btnIncrement = document.body.querySelector(
//   'button[data-action="increment"]',
// );
// const btnDecrement = document.body.querySelector(
//   'button[data-action="decrement"]',
// );

// function test(max) {
//   const random = Math.floor(Math.random() * max);
//   if (random > 50) {
//     btnIncrement.style.color = '#fff';
//     btnIncrement.style.backgroundColor = 'red';
//     btnIncrement.style.borderRadius = '50px';
//     btnIncrement.style.border = 'none';
//     return random;
//   } else {
//     btnDecrement.style.color = '#fff';
//     btnDecrement.style.backgroundColor = 'green';
//     btnDecrement.style.borderRadius = '50px';
//     btnDecrement.style.border = 'none';
//     return random;
//   }
// }

// console.log('random number:', test(100));

//  =====================NX================== <|> Создание и удаление элементов <|>

// Создание и добавление

// const title = document.createElement('h1');
// title.textContent = 'It is title';
// title.className = 'title';
// console.log(title);

// const image = document.createElement('img');
// image.src = '../img/wax.png';
// image.alt = 'wax';
// image.className = 'img';
// console.log(image);

// const btn = document.createElement('button');
// btn.type = 'button';
// btn.className = 'btn';
// btn.textContent = 'Это кнопка';
// console.log(btn);

// const text = document.createElement('p');
// text.textContent = 'Это текст';
// text.className = 'text';
// console.log(text);

// Удаление

// const title = document.querySelector('.article-title');
// title.remove();
// console.log(title);

// const text = document.querySelector('.article-text');
// text.remove();
// console.log(text);

//  =====================NX================== <|> Свойство innerHTML <|>

// Чтение

// const article = document.querySelector('.article');
// console.log('article:', article.innerHTML);

// const title = document.querySelector('.article .title');
// console.log('title:', title.innerHTML);

// const text = document.querySelector('.article .text');
// console.log('text:', text.innerHTML);

// const link = document.querySelector('.article .link');
// console.log('link:', link.innerHTML);

// Изменение

// const title = document.querySelector('.article .title');
// console.log('title:', title.innerHTML);
// title.innerHTML = 'New title';

// const link = document.querySelector('.article .link');
// link.innerHTML = 'Other more';
// console.log('link:', link.innerHTML);

// Создаем из массива разметку

// const clients = ['Apple', 'Lemon', 'Kiwi', 'Poly', 'Mango'];

// const list = document.querySelector('ul');
// const items = document.querySelector('li');
// const markup = clients.map(client => `<li>${client}</li>`).join('');

// list.innerHTML = markup;

// list.style.listStyle = 'none';
// list.style.display = 'flex';
// list.style.gap = '10px';

// console.log(list);

// Метод insertAdjacentHTML() для добавления

// const list = document.querySelector('ul');
// console.log(list);

// const clients = ['Apple', 'Lemon', 'Kiwi'];

// const markup = clients.map(client => `<li>${client}</li>`).join('');
// list.insertAdjacentHTML('afterbegin', markup);
// list.insertAdjacentHTML('beforebegin', '<h1>Hello World</h1>');
