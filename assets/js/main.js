console.log("its work");

const bottone = document.getElementById("calcola")
//prende il DOM form tramite id
const form = document.getElementById("form")
//prendo gli input dei km e dell'età
const kmEL = document.getElementById("km");
const etaEL = document.getElementById("eta");
const nomeEL = document.getElementById("nome");

//prende la sezione form ed impedisco di far refreshare 
//la pagina quando clicchi il pulsante
form.addEventListener(`submit`, function (event) {
    event.preventDefault();
    //leggi i valori inseriti e li converte da string a numeri
    const km = parseInt(kmEL.value)
    const eta = parseInt(etaEL.value)
    const nome = nomeEL.value;

    //calcolo degli sconti per eventuali differenze di età
    const prezzokm = 0.21;
    let prezzototale = km * prezzokm;

    if (eta < 18) {
        prezzototale *= 0.8;
    } else if (eta >= 65) {
        prezzototale *= 0.6;
    }

    console.log(`Prezzo totale ${prezzototale}`);

    //prendo il DOM del div e stampo il risultato in HTML
    const risultato = document.getElementById("risultato");
    risultato.innerHTML = `
    <p>Il suddetto ${nome}</p>
    <p>Vuoi percorrere ${km} km</p>
    <p>hai un età di ${eta}</p>
    <p>per un totale di ${prezzototale} €</p>`

})