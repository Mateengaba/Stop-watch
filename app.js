var minhead = document.getElementById("minhead")
var Sechead = document.getElementById("Sechead")
var milihead = document.getElementById("milihead")
var startbtn = document.getElementById("startbtn")
var stopbtn = document.getElementById("stopbtn")

// Variables Initialize
var interval;  // interval aik variable hai jo setInterval function ko store karega.
var min = 0
var Sec = 0
var mili = 0

function start() {

    mili++  // Milliseconds ko 1 se barhana

    milihead.innerHTML = mili  //`milihead` element ka text update karna


    if (mili >= 100) {  // Agar milliseconds 100 ho jayein to
        Sec++        // Seconds ko 1 se barhana
        Sechead.innerHTML = Sec   // `Sechead` element ka text update karna
        mili = 0   //  Milliseconds ko wapas 0 pe set karna

    } else if (Sec >= 59) {   // Agar seconds 59 se zyada ho jaayein
        min++  // Minutes ko 1 se barhana
        minhead.innerHTML = min
        Sec = 0

    }



}


function startWatch() {

    interval = setInterval(start, 10)  // start` function ko har 10 milliseconds baad chalana
    // startbtn.style.display = "none"
    startbtn.classList.add("hidden"); // Hide start button
    stopbtn.classList.remove("hidden"); // Show stop button
}



function reset(){
    clearInterval(interval)
milihead.innerHTML = "00"
Sechead.innerHTML = "00"
minhead.innerHTML = "00"
var min = 0
var Sec = 0
var mili = 0
startbtn.classList.remove("hidden"); // Show start button
stopbtn.classList.add("hidden"); // Hide stop button

}


function stop(){

    clearInterval(interval)  // `interval` ko clear karna
    startbtn.classList.remove("hidden"); // Show start button
    stopbtn.classList.add("hidden"); // Hide stop button

}