'use strict';

const parolaInserita = prompt('Inserisci una parola');
console.log(parolaInserita);

let parola1 = '';
let parola2 = '';

for(let i = 0; i < parolaInserita.length; i++){
    parola1 = parolaInserita[i];
}

for(let i = parolaInserita.length - 1; i >= 0; i--){
    parola2 = parolaInserita[i];
}

function palindroma (text1, text2){
    if (parola1 === parola2){
        console.log('palindroma');
    }
    return text1 === text2;
}

const palindromaResult = palindroma(parola1, parola2);
console.log(palindromaResult)
