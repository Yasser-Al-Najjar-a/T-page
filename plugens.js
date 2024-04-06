let countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();
// console.log(countDownDate)

let counter = setInterval(() => {

    let dateNow = new Date().getTime();

    let dataDiff = countDownDate - dateNow;

    // let days = Math.floor(dataDiff / 1000 / 60 / 60 / 24);
    let days = Math.floor(dataDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(dataDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(dataDiff % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(dataDiff % (1000 * 60) / 1000);

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dataDiff < 0) {
        clearInterval(counter)
    }
}, 1000)
