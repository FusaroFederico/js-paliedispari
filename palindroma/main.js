'use strict';

/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

// l'utente inserisce una parola
const parola = prompt('inserisci una parola');
// la parola viene convertita in lettere minuscole
const parolaMin = parola.toLowerCase();

// stampa in console se la parola inserita dall'utente è o no palindroma
if (palindroma(parolaMin)) {
    console.log(`La parola '${parola}' è palindroma`);
} else {
    console.log(`La parola '${parola}' non è palindroma`);
}

// funzione che determina se una parola è palindroma
function palindroma(string) {
    //for per prendere le lettere a coppie, simmetriche rispetto al centro
    for (let i = 0; i < (string.length / 2); i++) {
        if (string.at(i) !== string.at(-i - 1)) {
            // se le lettere simmetriche sono diverse, restituisce false
            return false;
        }
    }
    // se le lettere simmetriche sono uguali, restituisce true
    return true;
}