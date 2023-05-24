// console.log('Hello world!');

// Komentarz liniowy

/**
 * Komentarz blokowy
 * działa
 * na
 * kilka
 * linii
 */

// alert("Tekst")

// if (confirm('Zatwierdź')) {
//     alert("Dzięki za zatwierdzenie!")
//     console.log('a')
// } else {
//     alert("Smutno:(");
// }

// const myName = prompt('Podaj imię:');

// if (myName) {
//     console.log('Hej', myName);
// } else {
//     console.log('Wartość:', myName);
// }


// Zmienne
// Zmienna przed ES6 - teraz raczej nie używamy
// var VARIABLE = 'Przypisany tekst do zmiennej';

// console.log(VARIABLE);

// VARIABLE = '2';

// console.log(VARIABLE);


// // Zmienna (ES6)
// let myVariable = "Zmienna";

// console.log(myVariable);

// myVariable = "Zmienna zmieniona";

// console.log(myVariable);


// // Zmienna stała (ES6)
// const myConst = 'Stała';

// console.log(myConst);

// myConst = 'Stała zmieniona';

// console.log(myConst);


// = operator przypisania
let number = 5;
const number2 = 2;
console.log(number)

// + - * / % **
console.log(number + number2)
console.log(number - number2)
console.log(number * number2)
console.log(number / number2)
console.log(number % number2)
console.log(number ** number2)

// == operator równości
console.log(number == number2)
console.log(number == 5)
console.log(number == '5')

// != nie równa się
console.log(number != number2)


// === operator mocnej równości? Sprawdza i wartość, i typ zmiennej
console.log(number === '5')
console.log(number === 5)

// ++ --
console.log(++number) // 6
console.log(number--) // 6, ale zaraz się zwiększa o 1
console.log(number) //5

// > < >= <= operatory porównania
console.log(number <= number2);

// && (and), || (or), ^ (xor), !(negacja)
console.log(true && true);
console.log(true || false);
console.log(true ^ true);
console.log(!true);