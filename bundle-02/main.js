/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
//function checkAge(eta) {
//let message = '';

//if (eta < 18) {
// message = `Sei troppo giovane! Hai ${myAge} anni!`;
//} else {
// message = 'Hai più di 18 anni!';
//}
//}
//checkAge();

// ESERCIZIO 2
//function printColorsNumber() {
//const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//console.log(`Nella mia palette ci sono ${colors.length} colori!`);
//}
//printColorsNumber();

/*Soluzione
1.due erorri di sintassi dovevano essere rettificati.
*/

// ESERCIZIO 3
//function addNumbers() {
//const userNumber = parseInt(prompt('Inserisci un numero'));
//const total = userNumber + 12;

//console.log(`Il risultato finale è ${total}`);
//}
//addNumbers();

/*Soluzione
1.il valore vien passato come string,serve un parseInt per cambiarlo in numero ed essere sommato.*/


// ESERCIZIO 4
//function checkAccess() {
//const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
//const userEmail = prompt('Inserisci il tuo indirizzo email');

//let grantAccess = false;

//if (addresses.includes(userEmail)) {
//grantAccess = true;
//console.log('Accesso consentito!');
//}
//else {
//console.log('Accesso negato!');
//}
//};

//checkAccess();

/*Soluzione
1.uno degli if non era necessario 
2.il console log dell'if cancellato va messo nel primo.
*/


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = true;

            }

        }
    }
    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
};
checkAccessImproved();

/*Soluzione
1.mancava una graffa alla fine della funzione
*/





























