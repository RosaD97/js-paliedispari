'use strict';

const parolaInserita = prompt('Inserisci una parola');
console.log(parolaInserita);

let controllo = '';

for(let i = parolaInserita.length - 1; i > parolaInserita; i--){
    controllo = parolaInserita[i];
    console.log(controllo);
}