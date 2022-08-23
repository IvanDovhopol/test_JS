// Module 4 =>

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

//  ======================================= <|> ЗАМЫКАНИЕ <|>

// const makeSheff = name => {
//   const makeDish = dish => {
//     console.log(`Повар ${name} готовит ${dish}`);
//   };

//   return makeDish;
// };

// const lemon = makeSheff('Lemon');
// lemon('spagetti');

//  ======================================= <|> forEach <|>

// const numbers = [4, 6, 7, 8, 4, 3, 7, 9, 9, 4, 8, 9];

// numbers.forEach((num, id, arr) => {
//   console.log('number', num, 'index', id, 'arr', arr);
// });

//  ======================================= <|> Метод map() <|>

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// console.log(students);

// const studentsNames = students.map(student => student.name);
// console.log('names:', studentsNames);

// const studentsScores = students.map(student => student.score);
// console.log('scores:', studentsScores);

//  ======================================= <|> Метод filter() <|>

// const numbers = [2, 6, -35, 8, 4, 7, 89, -78, -1, 0];

// const filteredNumbers = numbers.filter(number => number >= 0);
// console.log('Плюсовые числа', filteredNumbers);

// const filteredNumbersNegative = numbers.filter(number => number < 0);
// console.log('Минусовые числа', filteredNumbersNegative);

//  ======================================= <|> Находим уникальные элементы в массиве <|>

// const students = [
//   { name: 'Манго', courses: ['математика', 'физика'] },
//   { name: 'Поли', courses: ['информатика', 'математика'] },
//   { name: 'Киви', courses: ['физика', 'биология'] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// const uniqieCourses = allCourses.filter(
//   (course, i, arr) => arr.indexOf(course) === i,
// );

// console.log('Массив уникальных курсов после фильтра', uniqieCourses);

// //

// const numbers = [2, 5, 8, 0, 5, 0, 3, 6, 7, 4, 6, 7, 3, 8, 4, 75, 7, 8, 8, 8];
// console.log('Исходный массив', numbers);

// const uniqieNumbers = numbers.filter(
//   (number, i, arr) => arr.indexOf(number) === i,
// );
// console.log('Массив уникальных цифр после фильтра', uniqieNumbers);

//  ======================================= <|> Фильтруем студентов по набраным балам <|>

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best);

// const loozer = students.filter(student => student.score < LOW_SCORE);
// console.log(loozer);

// const normal = students.filter(
//   student => student.score < HIGH_SCORE && student.score > LOW_SCORE,
// );
// console.log(normal);

//  ======================================= <|> Метод find() <|>

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// const findLabel = colorPickerOptions.find(option => option.label === 'red');
// console.log(findLabel);

// ======================================= <|> Метод findIndex() <|>

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// const findIndex = colorPickerOptions.findIndex(
//   option => option.label === 'pink',
// );

// console.log(findIndex);

// ======================================= <|> Метод every() <|>

// const numbers = [2, 5, 8, 0, 5, 0, 3, 6, 7, 4, 6, 7, 3, 8, 4, 75, 7, 8, 8, 8];
// const checkPositiveNumbers = numbers.every(number => number >= 0);
// console.log(checkPositiveNumbers);

// const numbers = [2, 6, -35, 8, 4, 7, 89, -78, -1, 0];
// const checkNegativeNumbers = numbers.every(number => number < 0);
// console.log(checkNegativeNumbers);

//  ======================================= <|> Метод some() <|>

// const numbers = [2, 6, -35, 8, 4, 7, 89, -78, -1, 0];
// const checkPositiveNumbers = numbers.some(number => number >= 0);
// console.log(checkPositiveNumbers);

// const numbers = [2, 5, 8, 0, 5, 0, 3, 6, 7, 4, 6, 7, 3, 8, 4, 75, 7, 8, 8, 8];
// const checkNegativeNumbers = numbers.some(number => number < 0);
// console.log(checkNegativeNumbers);

//  ======================================= <|> Метод reduce() <|>

// console.log(
//   'total:',
//   [
//     3, 5, 6, 7, 7, 89, 87, 7, 3, 2, 6, 6, 6, 6, 7, 8, 90, 6, 4, 3, 4, 634, 76,
//     867, 967, 807, 54, 63, 45, 37,
//   ].reduce((start, number) => start + number),
// );

//  ======================================= <|> Массив объектов <|>

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// const totalScore = students.reduce(
//   (total, student) => total + student.score,
//   0,
// );
// console.log('total score:', totalScore);

// const avarageScore = totalScore / students.length;
// console.log('avarage score:', avarageScore);

//  ======================================= <|> Продвинутый reduce <|>

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// console.log('total:', likes);

// ||

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const countLikes = tweets =>
//   tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log('total:', countLikes(tweets));

//

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);
//   return allTags;
// }, []);

// console.log(tags);

// ||

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);
//     return allTags;
//   }, []);

// console.log(getTags(tweets));

//

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);
//     return allTags;
//   }, []);

// console.log(getTags(tweets));

// const tags = getTags(tweets);

// //

// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

//  ======================================= <|> Метод sort() <|>

// const numbers = [
//   36, 55, 64, 73, 71, 89, 87, 75, 34, 22, 96, 86, 61, 63, 74, 85, 90, 46, 34,
//   34, 45, 63, 76, 67, 97, 87, 54, 63, 45, 37,
// ];

// numbers.sort();
// console.log(numbers);

//

// const letters = ['в', 'а', 'г', 'б'];
// alphabet.sort();
// console.log(letters);

//  ======================================= <|> Сортировка чисел по возрастанию и убыванию <|>

// const numbers = [
//   369, 55, 64, 73, 71, 9, 87, 75, 34, 22, 96, 86, 61, 63, 74, 85, 90, 46, 34,
//   34, 45, 63, 76, 67, 97, 87, 549, 63, 45, 37,
// ];

// const increaseNumbers = [...numbers].sort((a, b) => a - b);
// console.log('Сортировка чисел по возрастанию:', increaseNumbers);

// const descendingNumbers = [...numbers].sort((a, b) => b - a);
// console.log('Сортировка чисел по убыванию:', descendingNumbers);

//  ======================================= <|> Свой порядок сортировки строк localeCompare() <|>

// console.log('a'.localeCompare('b')); // -1
// console.log('b'.localeCompare('a')); // 1
// console.log('a'.localeCompare('a')); // 0

//

// const users = ['Вика', 'Андрей', 'Олег', 'Юля', 'Борис', 'Катя'];

// const inLettersOrder = [...users].sort((a, b) => a.localeCompare(b));
// console.log('Имена отсортированы по алфавиту:', inLettersOrder);

// const inReverseLettersOrder = [...users].sort((a, b) => b.localeCompare(a));
// console.log(
//   'Имена отсортированы в обратном порядке алфавита:',
//   inReverseLettersOrder,
// );

//  ======================================= <|> Сортировка объектов <|>

// const users = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
// ];

// const increaseScore = users.sort(
//   (firstUser, lastUser) => firstUser.score - lastUser.score,
// );
// console.log('Сортировка по возрастанию:', increaseScore);

//

// const descendingScore = users.sort(
//   (firstUser, lastUser) => lastUser.score - firstUser.score,
// );
// console.log('Сортировка по спаданию:', descendingScore);

//

// const inAlphabeticalOrder = users.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name),
// );
// console.log('Сортировка по алфавиту:', inAlphabeticalOrder);

//  ======================================= <|> Цепочки методов <|>

// const students = [
//   { name: 'Манго', score: 83, courses: ['математика', 'физика'] },
//   { name: 'Поли', score: 59, courses: ['информатика', 'математика'] },
//   { name: 'Аякс', score: 37, courses: ['физика', 'биология'] },
//   { name: 'Киви', score: 94, courses: ['литература', 'информатика'] },
// ];

// const sortedStudentsByIncrease = [...students].sort(
//   (a, b) => a.score - b.score,
// );
// console.log(sortedStudentsByIncrease);

// const names = sortedStudentsByIncrease.map(student => student.name);
// console.log(names);

// ||

// const names = [...students]
//   .sort((a, b) => a.score - b.score)
//   .map(student => student.name);
// console.log(names);

//  ======================================= <|> Определяем уникальные курсы по алфавиту <|>

// const students = [
//   { name: 'Манго', score: 83, courses: ['математика', 'физика'] },
//   { name: 'Поли', score: 59, courses: ['информатика', 'математика'] },
//   { name: 'Аякс', score: 37, courses: ['физика', 'биология'] },
//   { name: 'Киви', score: 94, courses: ['литература', 'информатика'] },
// ];

// const UniqieSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((el, i, arr) => arr.indexOf(el) === i)
//   .sort((a, b) => a.localeCompare(b));
// console.log('Уникальные курсы по алфавиту:', UniqieSortedCourses);

/* Разь`яснение
1. На исходном массиве вызываем flatMap() и делаем разглаженный массив всех курсов.
2. К результату метода flatMap() применяем метод filter() для фильтрации уникальных элементов.
3. На результате метода filter() вызываем sort().
4. Переменной uniqueSortedCourses присваивается результат работы метода sort().
*/

//  ======================================= <|> lodash <|>

// console.log('sum:', _.sum([6434, 3223]));

//

// const numbers = [346357, 346748];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//   total += numbers[i];
// }
// console.log('var 1:', total);

// // ||

// console.log('var 2:', _.sum(numbers));

//

//  =====================NX================== <|> Module - 5 <|>

//  =====================NX================== <|> Контекст выполнения функции <|>

// const user = {
//   username: 'Ivan',
//   shownName() {
//     console.log(this.username);
//   },
// };

// user.shownName();

//

// const playlist = {
//   tracks: ['qwe', 'asd', 'zxc'],
//   getTracks() {
//     return this.tracks;
//   },
//   addTracks(trackName) {
//     this.tracks.push(trackName);
//   },
// };

// console.log('old tracks:', playlist.getTracks());
// playlist.addTracks('dsfhjsrtij');
// console.log('new tracks:', playlist.getTracks());

//  =====================NX================== <|> 'this' в глобальной области видимости <|>

// const foo = () => console.log(this);
// foo();

//  =====================NX================== <|> this в методе объекта <|>

// const user = {
//   userName: 'Ivan',
//   getUser() {
//     console.log('this:', this);
//   },
//   userShow() {
//     const userName = () => console.log('this.userName:', this.userName);
//     userName();
//   },
// };

// user.getUser();
// user.userShow();

//

// function showThis() {
//   console.log('this in showThis: ', this);
// }

// showThis();

// const user = {
//   name: 'Ivan',
// };

// user.showContext = showThis;
// user.showContext();

//  =====================NX================== <|> Методы функций -- call() <|>

// function greetUser(greeting) {
//   console.log(`${greeting}, ${this.username}!`);
// }

// const lemon = {
//   username: 'Lemon',
// };

// const watermelon = {
//   username: 'Watermelon',
// };

// greetUser.call(lemon, 'Welcome');
// greetUser.call(watermelon, 'Goodbye');

//  =====================NX================== <|> Методы функций -- apply() <|>

// function greetUser(greeting) {
//   console.log(`${greeting}, ${this.username}!`);
// }

// const lemon = {
//   username: 'Lemon',
// };

// const watermelon = {
//   username: 'Watermelon',
// };

// greetUser.apply(lemon, ['Welcome']);
// greetUser.apply(watermelon, ['Goodbye']);

//  =====================NX================== <|> Метод функции -- bind() <|>

// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() это вызов метода getFullName без объекта
//   console.log(`Обрабатываем заявку от ${callback()}...`);
// }

// // makeMessage(customer.getFullName); // Будет ошибка при вызове функции
// makeMessage(customer.getFullName.bind(customer));

//

// const user = {
//   name: 'Lemon',
//   age: '25',
//   city: 'Kiev',
//   makeUser() {
//     return {
//       name: 'Mango',
//       ages: this,
//     };
//   },
// };

// console.log(user.ages);

// const mango = user.makeUser();
// console.log(mango);

//

// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => (baseSalary + overtime) / rate;

// console.log(getWage(baseSalary, overtime, rate));

//

// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// console.log('total salary:', employee.getWage(), '$');

//

//  =====================NX================== <|> Классы и их свойства <|>

//

//  =====================NX================== <|> Конструктор класса <|>

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const kiwi = new User('Kiwi', 'kiwi@qwe');
// console.log('kiwi :>> ', kiwi);

// const watermelon = new User('Watermelon', 'watermelon@qwe');
// console.log('watermelon :>> ', watermelon);

//  =====================NX================== <|> Объект параметров <|>

// class User {
//   // Деструктуризируем объект
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User({
//   name: 'Манго',
//   email: 'mango@mail.com',
// });
// console.log(mango);

// const poly = new User({
//   name: 'Поли',
//   email: 'poly@mail.com',
// });
// console.log(poly);

//  =====================NX================== <|> Методы класса и Приватные свойства <|>

// class User {
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }

//   // Метод getEmail
//   getEmail() {
//     return this.email;
//   }

//   // Метод changeEmail
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// const lemon = new User({
//   neme: 'Lemon',
//   email: 'mango@qwe',
// });

// lemon.changeEmail('lemon@qwe');
// console.log(lemon.getEmail());
// console.log(lemon.#email); // Будет ошибка, это приватное свойство

//  =====================NX================== <|> Геттеры и сеттеры <|>

// class User {
//   #email;

//   constructor(name, email) {
//     this.name = name;
//     this.#email - email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     if (newEmail === 'qwe') {
//       console.log('Error');
//       return;
//     }
//     this.#email = newEmail;
//   }
// }

// const lemon = { name: 'Lemon', email: 'lemon@qwe' };
// lemon.email = 'superlemon@qwe';

// console.log('lemon.email :>> ', lemon.email);

//  =====================NX================== <|> Статические свойства <|>

// class User {
//   static Roles = {
//     ADMIN: 'admin',
//     EDITOR: 'editor',
//   };

//   #email;
//   #role;

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const lemon = {
//   email: 'lemon@qwe',
//   role: User.Roles.ADMIN,
// };

// console.log('lemon.role pre:>> ', lemon.role);
// lemon.role = User.Roles.EDITOR;
// console.log('lemon.role next:>> ', lemon.role);

//  =====================NX================== <|> Статические методы <|>

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: 'mango@mail.com' });

// console.log(User.isEmailTaken('poly@mail.com'));
// console.log(User.isEmailTaken('mango@mail.com'));

//  =====================NX================== <|> Наследование классов <|>

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class NewUser extends User {
//   //
// }

// const newUser = new NewUser('lemon@qwe');
// console.log('newUser :>> ', newUser);
// console.log('newUser.email :>> ', newUser.email);

//  =====================NX================== <|> Конструктор дочернего класса <|>

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }
// }

// const editor = new ContentEditor({ email: 'lemon@qwe', posts: [] });
// console.log('editor :>> ', editor);
// console.log('editor.email :>> ', editor.email);

//  =====================NX================== <|> Методы дочернего класса <|>

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const editor = new ContentEditor({ email: 'mango@mail.com', posts: [] });
// console.log(editor);
// console.log(editor.email);

// editor.addPost('post-1');
// console.log(editor.posts);

//

//

//  =====================NX================== <|> Закрепление материала <|>

// const objC = {
//   z: 5,
// };
// console.log('objC :>> ', objC);

// const objB = Object.create(objC);
// objB.y = 2;
// console.log('objB :>> ', objB);

// const objA = Object.create(objB);
// objA.x = 1;
// console.log('objA :>> ', objA);
