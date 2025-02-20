/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA:
non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile. */

// take the elements and save in the variable

const countdownEl = document.getElementById('countdown')
console.log(countdownEl);

const numbersListEl = document.getElementById('numbers-list')
console.log(numbersListEl);

const formEl = document.getElementById('answers-form')
console.log(formEl);

// generate five random numbers

function generateRandomNumbers (){
    const arrayRandomNumbers = []
    for (let i = 0; i < 5; i++){
        const randomNumbers = Math.floor(Math.random() * 100)
        if (arrayRandomNumbers.indexOf(randomNumbers) === -1){
            arrayRandomNumbers.push(randomNumbers)
        }
    }
    return arrayRandomNumbers
}

const listRandomNumber = generateRandomNumbers()
numbersListEl.innerHTML = `<li>${listRandomNumber}</li>`
console.log(listRandomNumber);

// after 30 seconds the numbers disappear and forms appear

setTimeout(() => {
    numbersListEl.classList.add('d-none')
    formEl.classList.remove('d-none')
}, 30000);








