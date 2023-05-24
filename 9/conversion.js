/* W JS typy się dzielą na prymitywne i złożone
Typy prymitywne:
- Number
- String - ciąg tekstowy
- BigInt
- Boolean - wartość logiczna 0/1
- Undefined
- Null
- Symbol

Typy złożone
- Object (Array, Map, Set)
*/

const nr = 20; // numer
const text = 'true' // ciąg tekstowy
const bool = true; // wartość logiczna
const nullVar = null;
let x;

console.log(nr, text, bool, nullVar, x);
$zmienna = 'zmienna';

// dygresja - kod w PHP
// strlen($zmienna); // będzie nam to zwracało długość ciągu znaków

// W JS inne podejście - 'konwersja' na obiekty
console.log($zmienna.length);

// obiekt
const human = {
    name: 'Bazyli',
    surname: 'Bednarz', //atrybuty
}
// Dostęp do atrybutu obiektu
console.log(human.name)
// Dostęp w inny sposób!
console.log(human['surname']);


console.log(typeof $zmienna);
console.log(typeof human);

/* 
Dlaczego tak się dzieje?
JS na czas działania danej operacji konwertuje 
typy prymitywne na obiekty - dzięki temu możemy
mieć dostęp do ich atrybutów
*/

const tab = [1, 2, 3, 4, 5, 6, 7];
console.log(tab);
tab.push(88); // metoda push służy do dodawania elementów do tablicy
console.log(tab);
tab[1] = 100; // inne dodawanie elementów do tablicy / modyfikacja
console.log(tab);

const stringKtoryJestObiektem = new String('Wartość');
console.log(stringKtoryJestObiektem);
console.log(typeof stringKtoryJestObiektem);


// Konwersja typów

console.log('1' + 2); // bez naszej wiedzy przekonwertowało numer
// na stringa
console.log(1 + '2');
console.log(2 + 2 + '3');

console.log('1' - 2); // -1
console.log(3 * '3');
console.log(3 / '3');
console.log('3' * '3');

console.log([1, 2, 3] + 'Bazyli'); //też string!
console.log(23 + ''); //string!
console.log([] + 'Bazyli');
console.log('' + {});

console.log(null + null)
console.log(null + true)
console.log(null + true + '10')

console.log(typeof NaN)
console.log(0.1 + 0.2)