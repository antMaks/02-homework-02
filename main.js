// Створив 1 змінну для отримання числа та створив цикл
let n = +prompt("Введіть перше число");
while (isNaN(n)) {
  n = +prompt("Введіть ціле число!");
}

//Створив 2 змінну для отримання числа і цикл

let m = +prompt("Введіть 2 число");

while (isNaN(m)) {
  m = +prompt("Введіть друге ціле число!");
}

// конфірм для питання парних чисел

const evenNum = confirm("Пропустити парне число?");

let totalNum = 0;
console.log(`Число 1 ${n}; Число 2 ${m}; Пропуcтити парні числа?: ${evenNum}`);

const maxNum = Math.max(n, m);

const minNum = Math.min(n, m);

for (let i = minNum; i <= maxNum; i++) {
  if (evenNum && i % 2 == 0) {
    continue;
  }
  totalNum += i;
}

console.log(`Сумма: ${totalNum}`);
