/**
 * funzione che calcola il prezzo del biglietto
 * @param {number} km
 * @param {*number} età
 * @returns {string}
 */
const biglietto = (km, età) => {
    const tariffa = 0.21;
    const scontoMin = 20 / 100;
    const scontoOver = 40 / 100;

    if(età < 18){
        const prezzoTotale = km * tariffa;
        const sconto = prezzoTotale * scontoMin;
        const prezzoFinale = (prezzoTotale - sconto).toFixed(2);
        messaggio = `${prezzoFinale} €`;
    }else if(età >= 65){
        const prezzoTotale = km * tariffa;
        const sconto = prezzoTotale * scontoOver;
        const prezzoFinale = (prezzoTotale - sconto).toFixed(2);
        messaggio = `${prezzoFinale} €`;
    }else{
        const prezzoFinale = (km * tariffa).toFixed(2);
        messaggio = `${prezzoFinale} €`;
    }
    return messaggio;
}

/**
 * funzione che genera un numero casuale da 1 a 9 per la carrozza
 *
 * @returns {number}
 */
function generaNumeroCasuale() {
    return Math.floor(Math.random() * 9) + 1;
}

/**
 * funzione che genera un numero casuale da 1 a 99999 per il CP
 *
 * @returns {number}
 */
function generaNumeroCasualeCP() {
    return Math.floor(Math.random() * 99999) + 1;
}

// Prelevo le variabili inserite dall'utente
const userForm = document.getElementById("user-form");
const userName = document.getElementById("user-name");
const userKm = document.getElementById("chilometri");
const userAge = document.getElementById("eta");
const userBtn = document.getElementById("btn");
const btnReset = document.getElementById("btn-reset");

// Prelevo le variabili della card del biglietto
const textBiglietto = document.getElementById("text-biglietto");
const card = document.getElementById("card");
const userCard = document.getElementById("user-card");
const offertaCard = document.getElementById("offerta-card");
const carrozzaCard = document.getElementById("carrozza-card");
const cpCard = document.getElementById("cp-card");
const costoBigliettoCard = document.getElementById("costo-biglietto-card");

userForm.addEventListener("submit", function(event){
    event.preventDefault();
    
    // Prelevo i valori
    const name = userName.value.trim();
    const km = userKm.value.trim();
    const age = userAge.value.trim();
    
    // Assegno i valori alle variabili della card
    userCard.innerHTML = name;
    costoBigliettoCard.innerHTML = biglietto(km, age);
    offertaCard.innerHTML = "Biglietto Standard";
    carrozzaCard.innerHTML = generaNumeroCasuale();
    cpCard.innerHTML = generaNumeroCasualeCP();

    textBiglietto.classList.remove("d-none");
    card.classList.remove("d-none");
})