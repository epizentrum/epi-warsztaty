// Poprawny kalkulator
// const num1 = Number(prompt('Podaj pierwszą liczbę!'));
// const num2 = Number(prompt('Podaj drugą liczbę!'));

// console.log(num1 + num2);

let calculator = ``;
calculator += `const num1 = Number(prompt('Podaj pierwszą liczbę!'));`;
calculator += `\n`;
calculator += `const num2 = Number(prompt('Podaj drugą liczbę!'));`;
calculator += `\n`;

// chcemy użyć liczb z zakresu 0-50
for (let i = 0; i <= 50; i++) {
    for (let j = 0; j <= 50; j++) {
        calculator += `if ((num1 === ${i}) && (num2 === ${j})) {\n`;
        calculator += `console.log('${i} + ${j} = ${i + j}')\n`;
        calculator += `}\n`;
    }
}

console.log(calculator);