/*
Pętle w JavaScript
*/

// Pętla for
// for (zmienne; warunek kończący; zmiana zmiennych) { kod }

// for (let i = 0; i != 100; ++i) {
//     // console.log(`Witaj epicki świecie kremówek po raz ${i}`);
//     console.log('Witaj epicki świecie kremówek po raz', i);
// }

console.log('Odliczanie...');
for (let i = 10; i > 0; i--) {
    console.log(`${i}...`);
}
console.log('Bum!');

let counter = 10;

for (; counter != 15;) {
    console.log(counter);
    counter++;
}
// Nieskończona pętla - uwaga!
// for (;;) {

// }


// Pętla while
while (counter != 50) {
    console.log(counter++);
}

// Pętla zagnieżdżona
for (let i = 0; i < 10; i++) {
    console.log('Pętla główna - wykonanie', i)
    for (let j = 0; j < 10; j++) {
        console.log('Pętla zagnieżdżona - wykonanie', j)
    }
}

// Rysunek
let stars = '';
for (let i = 0; i < 10; i++) {
    for (j = 0; j < 5; j++) {
        stars += '*';
    }
    stars += '\n';
}
console.log(stars);

// Break i continue
while (counter++) {
    console.log(counter)
    if (counter === 60) break; // wyjście z pętli
}

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) continue; // pomijamy przejście pętli
    console.log(i);
}

/**
 * 1. Zrobić samodzielnie pytacza o PIWO.
 * 2. Albo zmodyfikować pytacza o piwo, żeby pytał użytnika tak długo o wiek, 
 * aż ten go nie poda (czyli wynik końcowy ma być albo odmową, albo sprzedażą piwa) (użyć pętli while)
 * 3. Śmieszny kalkulator (pętle) https://github.com/AceLewis/my_first_calculator.py/blob/master/my_first_calculator.py
 */