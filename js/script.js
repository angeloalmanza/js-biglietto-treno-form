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
        messaggio = `Il tuo biglietto costa ${prezzoFinale} €`;
    }else if(età >= 65){
        const prezzoTotale = km * tariffa;
        const sconto = prezzoTotale * scontoOver;
        const prezzoFinale = (prezzoTotale - sconto).toFixed(2);
        messaggio = `Il tuo biglietto costa ${prezzoFinale} €`;
    }else{
        const prezzoFinale = (km * tariffa).toFixed(2);
        messaggio = `Il tuo biglietto costa ${prezzoFinale} €`;
    }
    return messaggio;
}

// Prelevo le variabili dall'html
const userKm = document.getElementById("chilometri");
const userAge = document.getElementById("eta");
const userBtn = document.getElementById("btn");

userBtn.addEventListener("click", function(){
    console.log(biglietto(userKm.value, userAge.value));
})