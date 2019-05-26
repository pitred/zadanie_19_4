'use strict';

// zadanie 1
var hello = 'Hello';
var world = 'world !';
var sayHello = function sayHello() {
  return hello + ' ' + world;
};
console.log(sayHello());

// zadanie 2
var multiply = function multiply() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};
console.log(multiply(5));

// zadanie3
var average = function average() {
  for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
    arg[_key] = arguments[_key];
  }

  return arg.reduce(function (a, b) {
    return a + b;
  }) / arg.length;
};
console.log(average(1, 3, 5, 4));

// zadanie 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));

// zadanie 5
var data = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = data[2],
    lastName = data[4];

console.log(firstName + ' ' + lastName);
