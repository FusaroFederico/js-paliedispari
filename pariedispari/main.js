'use strict';

/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
Dichiariamo chi ha vinto. */

// l'utente sceglie pari o dispari
const sceltaUtente = prompt('pari o dispari?').toLowerCase();

// l'utente inserisce un numero tra 1 e 5
const numUtente = Number(prompt('inserisci un numero tra 1 e 5'));

// numero random generato dal computer
const numRandom = getRandomIntInclusive(1, 5);

// salva l'output di parioDispari nella variabile risultato
const risultato = parioDispari(numUtente, numRandom);

// viene visualizzato in console chi ha vinto
if (risultato === sceltaUtente) {
    console.log(`
    Hai scelto: ${sceltaUtente} .
    Il computer ha scelto: ${numRandom} .
    La somma dei due numeri è: ${numUtente + numRandom} .
    La fortuna ti sorride, hai vinto!!
    `);
} else {
    console.log(`
    Hai scelto: ${sceltaUtente} .
    Il PC ha scelto: ${numRandom} .
    La somma dei due numeri è: ${numUtente + numRandom} .
    Stavolta la fortuna non è dalla tua. Ha vinto il computer!!
    `);
}

// funzione che genera un numero intero causale tra i valori min e max compresi
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// funzione che stabilisce se la somma di due numeri è pari o dispari
function parioDispari(num1, num2) {
    const somma = num1 + num2;
    if (somma % 2 === 0) {
        return 'pari';
    }
    return 'dispari';
}