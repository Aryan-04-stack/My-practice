let days = document.querySelector('#days')
let hrs = document.querySelector('#hrs')
let mins = document.querySelector('#mins')
let secs = document.querySelector('#secs')
let start = document.querySelector('#start')
let Pause = document.querySelector('#pause')
let head = document.querySelector('h1')
let form = document.querySelector('form')
let submit = document.querySelector('#submit')

let daystr = 0
let hrstr = 0
let minstr = 0
let secstr = 0

form.addEventListener('submit', (e) => {
    e.preventDefault();
    daystr = setdays.value
    minstr = setmins.value
    hrstr = sethrs.value
    secstr = setsecs.value
})

let timerId = null
start.addEventListener('click', () => {
    if(timerId !== null){
        clearInterval(timerId)
    }
    timerId = setInterval(countdown, 1000)
}
)
Pause.addEventListener('click', () => {
  clearInterval(timerId)
}
)
const countdown = () => {
    if (secstr > 0) {
        secstr--
    }
    else if (secstr === 0 && minstr > 0) {
        minstr--
        secstr = 59
    }
    else if (minstr === 0 && hrstr > 0) {
        hrstr--
        minstr = 59
    }
    else if (hrstr === 0 && daystr > 0) {
        daystr--
        hrstr = 59
    }
    else{
        clearInterval(timerId)
        head.innerHTML = 'TIMES UP!!!!'
        alert("TIMES UP")
        return; 
    }
    updateDisplay()
}

const updateDisplay = () => {
    days.innerText = daystr
    hrs.innerText = hrstr
    mins.innerText = minstr
    secs.innerText = secstr
}






