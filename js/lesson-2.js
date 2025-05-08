// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ['jazz', 'blues'];

// styles.push('rock-n-roll');

// styles[1] = 'classic';

// console.log(styles);
// // console.log(styles.indexOf('blues'));

// function logItems(array) {
//     for (let i = 0; i < array.length; i++) {
        
//         console.log(`${i + 1} - ${array[i]}`);
        
//     }
// }

// logItems(styles);

// TASK 2
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// const logins = ["Peter", "John", "Igor", "Sasha"];
// function checkLogin(array) {
    
//     let login = prompt("Введіть ім'я користувача");

//     if (array.includes(login)) {
//         alert (`Welcome ${login}`);
//     } else {
//         alert ('User not found');
//     }
// }
// checkLogin(logins);

// TASK 3

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage(...args) {
//     for (let arg of args) {
//         if (typeof arg !== 'number') {
//             return "Помилка: Аргументи повинні містити лише числа.";
//         }
//     }

//     let sum = 0;
//     for (let i = 0; i < args.length; i++) {
//         sum += args[i];
//     }

//     return sum / args.length;
// }

// console.log(calculateAverage(4, 8, 9, 7));

// function calculateAverage(...args) {
//   for (let arg of args) {
//     if (typeof arg !== 'number' || isNaN(arg)) {
//       return "Error: All arguments must be valid numbers.";
//       }
//   }

//   const sum = args.reduce((total, num) => total + num, 0);
//   return sum / args.length;
// }
// console.log(calculateAverage(4, 8, 9, 7));


// TASK 4

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].


// function createNewArray(arr) {
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i] + arr[i + 1]);
//     }

//     return result;
// }
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// const newArr = createNewArray(someArr);
// console.log(newArr);

// -------------------------------------------------


// TASK 5
// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
// function findSmallestNumber(numbers) {
// // тут я перевіряю чи масив це
//     if (!Array.isArray(numbers)) {
//         return 'Sory, it is not an array!';
//     }
// // тут  яперевіряю чи не пустий масив
//     if (numbers.length === 0) {
//         return 'Sory, array is emty';
//     }
// // припускаю, що перше число в масиві і є найменше
//     let smallest = numbers[0];
// // перебираю масив і знаходжу найменше число
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] < smallest) {
//             smallest = numbers[i];
//         }
//     }
//     return smallest;
// }

// console.log(findSmallestNumber(numbers));
// console.log(findSmallestNumber('numbers'));


// TASK MENTOR
// const person = { name: 'Mango' };
// function sayHi(age) {
//     return `${this.name} is ${age}`;
// }
// console.log(sayHi.call(person, 18));
// console.log(sayHi.bind(person, 18));

