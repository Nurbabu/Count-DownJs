const newYar = "01 January 2022";
const daysDiv = document.getElementById("days");
const hoursDiv = document.getElementById("hours");
const minstDiv = document.getElementById("mins");
const secondDiv = document.getElementById("seconds");

function countdown(){
    const neyar = new Date(newYar);
    const currendDay = new Date();
    const totalTime = (neyar - currendDay)/1000;
    
    const day = Math.floor(totalTime / 3600 / 24)
    const hours = Math.floor(totalTime / 3600) %24;
    const mins = Math.floor(totalTime / 60) % 60;
    const seconds = Math.floor(totalTime) % 60;
     daysDiv.innerHTML =day;
    hoursDiv.innerHTML = hours;
    minstDiv.innerHTML = mins;
    secondDiv.innerHTML = seconds;
    

}

countdown();

setInterval(countdown, 1000);