'use strict';

const choose = prompt('Scrivi: pari o dispari');
const numero = Number(prompt('Scrivi un numero tra 1 e 5'));
const computer = numeriACaso(1, 6);

function numeriACaso(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function pariDispari (num1, num2){
    console.log(num1)
    console.log(num2)
    const sum = num1 + num2;
    return sum;
}

const risultato = pariDispari(numero, computer);
console.log(risultato)

if (risultato % 2 === 0 && choose === 'pari' || risultato % 2 !== 0 && choose === 'dispari') {
    alert('hai vinto')
}else {
    alert('hai perso')
}