/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA:
non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile. */

// take the elements and save in the variable

const numbersListEl = document.getElementById('numbers-list');
const countdownEl = document.getElementById('countdown');
const instructionEl = document.getElementById('instructions');
const formEl = document.getElementById('answers-form');
const messageEl = document.getElementById('message');
document.getElementsByClassName('form-control').multiple = true;
const formInputEl = document.getElementsByClassName('form-control')



// generate random numbers

function generateRandomNumber (min,max){
    return Math.floor(Math.random() * (max - min) ) + min;
}

// generate array with random number
function generateArrayNumber (min,max,n){
    arrayNumber = []
    for (let i = 0; i < n; i++){
        arrayNumber.push(Number(generateRandomNumber(min,max)))
    }
    return arrayNumber
}

const randomNumbersList = generateArrayNumber(1,50,5)
console.log(randomNumbersList);

// generate markup for list
function generateListEl (list){
    let listEl = ''
    for (let i = 0; i < list.length; i++){
        listEl += `<li>${list[i]}</li>`
    }
    return listEl
}

const randomNumbersListEl = generateListEl(randomNumbersList)
console.log(randomNumbersListEl);

// inner list in page

numbersListEl.innerHTML = randomNumbersListEl

// inner countdown in pege

let countdownTimes = 3

countdownEl.innerHTML = countdownTimes

// generate interval function 
const countdown = setInterval(() => {
    countdownEl.innerText = --countdownTimes
    if (countdownTimes === 0){
        clearInterval(countdown)
        numbersListEl.classList.toggle('d-none')
        formEl.classList.toggle('d-none')
        instructionEl.innerText = "inserisci i numeri che ricordi"
    }
}, 1000)

let userNumberList = []

let rememberNumber = []

function createUserListNumber (list){
    const numberList = []
    for (let i = 0; i < list.length; i++){
        const thisElement = list[i].value
        numberList.push(Number(thisElement))
    }
    return numberList
}

function commonList (list1,list2){
    const list = []

    for (let i = 0; i < list1.length; i++){
        const thisUserNumber = list1[i]

        for (let y = 0; y < list2.length; y++){
            const thisRandomNumber = list2[y]

            if (thisUserNumber === thisRandomNumber){
                list.push(thisUserNumber)
            }
        }
    }
    return list
}

function generateResultString (list){
    let resultString = `hai indovinato ${list.length} numeri, e sono: `
    for (let i = 0; i < list.length; i++){
        resultString += ` ${list[i]}`
    }
    return resultString
}

formEl.addEventListener('submit', function(e){
    e.preventDefault()

    userNumberList = createUserListNumber(formInputEl)
    console.log(userNumberList);

    rememberNumber = commonList(userNumberList,randomNumbersList)
    console.log(rememberNumber);
    

    formEl.classList.toggle('d-none')
    countdownEl.classList.toggle('d-none')

    instructionEl.innerText = generateResultString(rememberNumber)
})

















