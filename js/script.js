/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA:
non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile. */

// take the elements and save in the variable

const countdownEl = document.getElementById('countdown')

const numbersListEl = document.getElementById('numbers-list')

const formEl = document.getElementById('answers-form')

const messageEl = document.getElementById('message')

const inputGroupEl = document.getElementById('input-group')

// generate five random numbers

function generateRandomNumbers (){
    const arrayRandomNumbers = []
    for (let i = 0; i < 5; i++){
        const randomNumbers = Math.floor(Math.random() * 50) +1
        if (arrayRandomNumbers.indexOf(randomNumbers) === -1){
            arrayRandomNumbers.push(randomNumbers)
        }
    }
    return arrayRandomNumbers
}

const listRandomNumber = generateRandomNumbers()
numbersListEl.innerHTML = `<li>${listRandomNumber}</li>`
console.log(listRandomNumber);

// generate countdown
let countdownInterval;
let second = 3
countdownInterval = setInterval (function () {
    countdownEl.innerHTML = second--
    if (countdownEl.innerHTML == 0){
        clearInterval(countdownInterval)
    }
}, 1000)

// after 30 seconds the numbers disappear and forms appear
let timeoutSecond;

timeoutSecond = setTimeout(() => {
    numbersListEl.classList.add('d-none')
    formEl.classList.remove('d-none')
}, 3000);

// indicates which and how many numbers are in common

formEl.addEventListener('submit', function arrayChosenNumber (e){
    e.defaultPrevented
    
    let chosenNumber = []
    chosenNumber.push(inputGroupEl.innerText)
    for (let i = 0; i < listRandomNumber.length; i++){
        if (chosenNumber.includes(listRandomNumber)){
            messageEl.innerText = chosenNumber[i]
        }
    }
})


















