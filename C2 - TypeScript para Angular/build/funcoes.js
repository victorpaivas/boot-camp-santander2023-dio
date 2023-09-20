"use strict";
// Funções
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(4, 7);
console.log(soma);
function addToHello(name) {
    return `Hello ${name}`;
}
console.log(addToHello('Victor'));
// Funções Multitypes
function CallToPhone(phone) {
    return phone;
}
console.log(CallToPhone(33)); // ou retorna um number ou string
