const mainEvent = new Date("1 Jan 2022");
document.getElementById("main-event").innerHTML = "Countdown for new years eve"

function formatSeconds(sec){
    if (sec < 10){
        sec = '0' + sec;
    }
    return sec;
}

setInterval(function (){refreshTime();},1000);

function refreshTime(){
    let today = new Date;
    let secondsUntil = (mainEvent - today) / 1000;
    let days = Math.floor(secondsUntil / 3600 / 24);
    let hours = Math.floor(secondsUntil / 3600) % 24;
    let mins = Math.floor(secondsUntil / 60) % 60;
    let sec = Math.floor(secondsUntil) % 60;
    sec = formatSeconds(sec);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = sec;

}

