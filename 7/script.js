// Instrukcje warunkowe - if / else /else if

// const age = prompt('Podaj swój wiek!')
// if (age >= 18) {
//     // Konstrukcja z grawisami ``
//     console.log(`Masz ${age} lat. Jesteś pełnoletni`);
// } else if (age < 3) {
//     console.log('Masz ' + age + ' lat. Kłamiesz!')
// } else {
//     console.log('Masz ' + age + ' lat. Nie jesteś pełnoletni :(')
// }



// Wartości prawdziwawe i fałszywawe xD
// console.log(true)
// console.log(false)

// console.log(20 < 18);

// console.log('a' < "A");
// console.log('Aa' < "AA");
// console.log('A' > 'B')

// console.log('Jan Paweł 2' > 'Mariusz Pudzianowski')

// console.log('3' > 2);
// console.log('04' > 3); // true
// console.log(5 > '04');

// console.log('Jan Paweł' > 2)

// console.log(Number('Jan Paweł'));

// console.log(parseInt('10 grzechów głównych xD')); // parsowanie na liczbę całkowitą

// Każdy niepusty string przyjmie wartość true
// if ('String') { 
// console.log('Wartość prawdziwa')
// }

// false, null, undefined, 0, NaN, ""
// if (!"") {
//     console.log('a')
// }

// const num = 13;
// console.log(`Liczba ${num} jest ${(num % 2 == 0) ? 'parzysta' : 'nieparzysta'} `);


// Switch - więcej wyrażeń if else, inny zapis
const num1 = 2;

switch (num1) {
    case 1:
        console.log('Jedynka');
        break;
    case 2:
        console.log('Dwójka');
        break;
    case 3:
        console.log('Trójka');
        break;
    default:
        console.log('Inny numer');
}

/* Zadanie
1. Pierwszy kalkulator ala https://github.com/AceLewis/my_first_calculator.py/blob/master/my_first_calculator.py
(np. tylko dla dodawania do 100) (zupełnie nieobowiązkowe)

2. Program sprzedający PIWO
- Musi pytać użytkownika o wiek
- Jeśli wiek >= 18, to program sprzedaje piwo (console.log co tam chcecie)
- Jeśli wiek < 18, to program odmawia piwa :(
- Jeśli wiek > 150, to program mówi, że się kłamie
- Jeśli użytnik odmówi odpowiedzi, to program wyrzuca go za drzwi
(Co jeśli użytkownik nie wpisze liczby?) (Number(zmienna), a później (typeof)
(tylko trochę nieobowiązkowe)
*/