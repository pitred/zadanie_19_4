// zadanie 1
const hello = 'Hello';
const world = 'world !';
const sayHello = () => `${hello} ${world}`;
console.log(sayHello());

// zadanie 2
const multiply = (a = 1, b = 1) => a * b;
console.log(multiply(5));

// zadanie3
const average = (...arg) => arg.reduce((a, b) => a + b) / arg.length;
console.log(average(1, 3, 5, 4));

// zadanie 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades).toFixed(2));

// zadanie 5
const data = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstName, , lastName] = data;
console.log(firstName + ' ' + lastName);
