console.log("its work");

const bottone = document.getElementById("calcola")
const form = document.getElementById("form")
const kmEL = document.getElementById("km");
const etaEL = document.getElementById("eta");

form.addEventListener(`submit`, function (event) {
    event.preventDefault();
    const km = parseInt(kmEL.value)
    const eta = parseInt(etaEL.value)

    const prezzokm = 0.21;
    let prezzototale = km * prezzokm;

    if (eta < 18) {
        prezzototale *= 0.8;
    } else if (eta >= 65) {
        prezzototale *= 0.6;
    }

    console.log(`Prezzo totale ${prezzototale}`);

    const risultato = document.getElementById("risultato");
    risultato.innerHTML = `
    <p>Vuoi percorrere ${km} km</p>
    <p>hai un età di ${eta}</p>
    <p>per un totale di ${prezzototale} €</p>`

})