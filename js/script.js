// esercizio 1
let number = 100;
console.log(number);

// esercizio 2
const PI = 3.14;
console.log(PI);

// esercizio 2/B
// PI = 3.1416;
// console.log(PI);

// esercizio 2/C
let radius = 8;
let circle = radius * 2 * PI
console.log(circle)

// esercizio 3
let name = 'Carlo'
console.log(name)
name = 'Marco'
console.log(name)

// esercizio 4
let greet = 'Ciao, Mondo!';
console.log(greet);

// esercizio 4/B
// let greet = 'Come stai, Mondo?';
// console.log(greet);

// esercizio 4/C
// greet = greet + ' Come stai?'
// console.log(greet)

// esercizio 4/C template literals
greet = `${greet} Come stai?`
console.log(greet)

//esercizio 5
let n1 = 8;
let n2 = 4;
let comparison;

if (n1 > n2) {
    comparison = n1;
}
else {
    comparison = n2;
}

console.log(comparison);

// esercizio 6
let st1 = "peppe";
let st2 = "pippo";
let comparison;

if (st1 == st2) {
    comparison = "le stringhe sono uguali";
}  else {
    comparison = "le stringhe sono diverse";
}
console.log(comparison)

// esercizio 7
let num = 2;
let st = "2";
let comparison;

if (num == st) {
    comparison = "le stringhe sono uguali";
}  else {
    comparison = "le stringhe sono diverse";
}
console.log(comparison)

// esercizio 8

for (let i=1; i<=42; i++){
    console.log(i)
}

// esercizio 8/a

for (let i=42; i>=1; i--){
    console.log(i)
}

// esercizio 9

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers);

// esercizio 9/a

const fruits = ['mela', 'banana', 'pesca', 'pera', 'albicocca', 'mango', 'kiwi', 'papaya'];
console.log(fruits);