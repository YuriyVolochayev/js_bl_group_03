// TASK1

// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title і повертає slug, створений із цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
// Усі символи slug повинні бути в нижньому регістрі.
// Усі слова slug повинні бути розділені тире.
    
// function slugify(title) {
//     return title.toLowerCase().split(" ").join("-");
// }
// console.log(slugify("Arrays for beginners"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));


// TASK2
// Напиши функцію під назвою makeArray, яка приймає три параметри: firstArray (масив), secondArray (масив) і maxLength (число). Функція повинна створювати новий масив, який містить усі елементи з firstArray, а потім усі елементи з secondArray.
// Якщо кількість елементів у новому масиві перевищує maxLength, функція повинна повернути копію масиву з довжиною maxLength елементів.
// В іншому випадку функція повинна повернути весь новий масив.

// Var 1
// function makeArray(firstArray, secondArray, maxLength) {
//    const combinedArray = firstArray.concat(secondArray);
//     return combinedArray > maxLength ? combinedArray.slice(0, maxLength) : combinedArray;
// }

// Var 2

// function makeArray(firstArray, secondArray, maxLength) {
//     const combinedArray = firstArray.concat(secondArray);
    
//     if (combinedArray.length > maxLength) {

//         return combinedArray.slice(0, maxLength);
        
//     } else {
//         return combinedArray;
        
//     }
// }
    
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));


// TASK3


// Напиши функцію filterArray(numbers, value), яка приймає масив чисел (numbers) та значення (value) як параметри. Функція повинна повертати новий масив лише тих чисел із масиву numbers, які більші за значення value.



// Усередині функції:

// Створи порожній масив, у який будеш додавати підходящі числа.
// Використай цикл для ітерації кожного елемента масиву numbers.
// Використовуй умовний оператор if усередині циклу для перевірки кожного елемента и додавання до свого масиву.
// Поверни свій новий масив з підходящими числами як результат.

// function filterArray(numbers, value) {
//     const newArray = [];

//     for (let i = 0; i < numbers.length; i+=1) {
//         if (numbers[i] > value) {
//             newArray.push(numbers[i]);
//         }
//     }

//     return newArray;
    
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));


// TASK4

// Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries) в якості параметра. Кожна властивість об'єкта salaries — це ключ, що містить ім'я співробітника, та значення - його відповідна зарплатня.

// Доповни код функції countTotalSalary(salaries) так, щоб вона повертала загальну суму зарплат всіх співробітників.

// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   const values = Object.values(salaries);

//   for (const salary of values) {
//     totalSalary += salary; // додаємо кожну зарплату до загальної суми
//   }

//   return totalSalary;
// }

// TASK5

// Функція getProductPrice(productName) приймає один параметр productName - назва продукту. Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.

// Доповни код функції так, щоб вона шукала об'єкт продукту з певним ім'ям (властивість name) в масиві products і повертала його ціну (властивість price). Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
// }

// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості.
// Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products.
// Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   const values = [];

//   for (const product of products) {
//     if (propName in product) {
//       values.push(product[propName]);
//     }
//   }

//   return values;
// }

// TASK7

// Функція calculateTotalPrice(productName) приймає один параметр productName - назва товару.
// Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.
// Доповни код функції так, щоб вона повертала загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.
// Якщо продукту з такою назвою немає, то функція повинна повертати рядок "Product <productName> not found!" , де <productName> — це ім'я товару.

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }

//   return `Product ${productName} not found!`;
// }

// TASK8

// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною.
// Тому зараз у властивості potions буде зберігатися масив об'єктів з властивостями name та price.

// Об'єкт atTheOldToad має наступні властивості:

// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає значення властивості potions
// addPotion() — метод, який приймає параметр об'єкт нового зілля newPotion і додає його в кінець масиву у властивості potions.
// Додай метод getTotalPrice(), який має повертати загальну вартість усіх зілль з властивості potions.

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {

//     let totalPrice = 0;

//     for (const potion of this.potions) {
//       totalPrice += potion.price;
//     }
// return totalPrice;
//   },
// };

// TASK9
// Об'єкт atTheOldToad має наступні властивості:

// potions — масив об'єктів зілль
// getPotions() — метод, який повертає значення властивості potions
// updatePotionName() — метод, який приймає два параметра рядків oldName і newName
// Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for(const potion of this.potions) {
//       if(potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//   },
// };
// TASK10

// У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати тестування окремих груп.
// Використовуючи розпилення, доповни код таким чином, щоб:

// У змінній allScores зберігався масив всіх результатів від першої до третьої групи включно.
// У змінній bestScore був найвищий загальний бал.
// У змінній worstScore був найнижчий загальний бал

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max (...allScores);
// const worstScore = Math.min(...allScores);