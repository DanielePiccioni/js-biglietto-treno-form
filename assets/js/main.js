console.log("its work");

const bottone = document.getElementById("calcola")

bottone.addEventListener(`click`, function() {
const km = document.getElementById("km").value;
const eta = document.getElementById("eta").value;
const prezzokm = 0.21;
let prezzototale = km * prezzokm;

if ( eta < 18){
    prezzototale *= 0.8;
} else if (eta >= 65) {
    prezzototale *= 0.6;
}

console.log(`Prezzo totale ${prezzototale}`);

})