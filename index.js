const daysVal = document.querySelector('[data-value="days"]');
const hoursVal = document.querySelector('[data-value="hours"]');
const minsVal = document.querySelector('[data-value="mins"]');
const secsVal = document.querySelector('[data-value="secs"]');

const finishDate = new Date(2022, 0, 1)
// console.log(finishDate)

let deltaTime = null

const intervalID = setInterval(() => {
    const currenTime = Date.now()
    deltaTime = finishDate - currenTime
    // console.log(deltaTime)
    if (deltaTime <= 0) {
        clearInterval(intervalID)
        clearMarkup()
        return
    }
   insertValues(time(deltaTime))
}, 1000)

function time(val) {
    const days = pad(Math.floor(deltaTime / (1000 * 60 * 60 * 24)));
    // console.log(days)
    const hours = pad(Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    // console.log(hours)
    const mins = pad(Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
    // console.log(mins)
    const secs = pad(Math.floor((deltaTime % (1000 * 60)) / 1000));
    // console.log(secs)
    return {days, hours, mins, secs}
}

function pad(val) {
    return String(val).padStart(2, '0')
}

function insertValues(timerEl) {
    const { days, hours, mins, secs } = timerEl
    daysVal.textContent = days
    hoursVal.textContent = hours
    minsVal.textContent = mins
    secsVal.textContent = secs
}

function clearMarkup() {
    const { days, hours, mins, secs } = timerEl
    daysVal.textContent = '00'
    hoursVal.textContent = '00'
    minsVal.textContent = '00'
    secsVal.textContent = '00'
  }