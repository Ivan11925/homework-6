// 1. Вивести в консоль всі числа від 1 до 10 за допомогою циклу while.
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// 2. Вивести в консоль всі парні числа від 2 до 20 за допомогою циклу for. Якщо число парне, пропустити його за допомогою continue.
// Note: The instruction says to skip even numbers using continue, but that contradicts printing even numbers.
// Assuming the intention is to print even numbers and skip odd numbers.
for (let num = 2; num <= 20; num++) {
  if (num % 2 !== 0) {
    continue; // skip odd numbers
  }
  console.log(num);
}

// 3. Вивести в консоль таблицю множення числа 7 за допомогою циклу for.
for (let j = 1; j <= 10; j++) {
  console.log(`7 x ${j} = ${7 * j}`);
}

// 4. Вивести в консоль всі числа, які менші за n. Якщо зустрічається число, що більше або дорівнює n, цикл повинен бути закінчений за допомогою break.
let n = 10; // You can change this value as needed
for (let k = 0; ; k++) {
  if (k >= n) {
    break;
  }
  console.log(k);
}

// 5. За допомогою циклу while вивести в консоль всі числа від 1 до 20, крім чисел, кратних 3.
// Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue.
let m = 1;
while (m <= 20) {
  if (m % 3 === 0) {
    m++;
    continue;
  }
  console.log(m);
  m++;
}
