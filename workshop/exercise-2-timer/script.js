//1. Get current time to display
let currentTime = document.querySelector("#time");
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function showTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.querySelector("#time").innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function () {
    showTime();
  }, 500);
}
showTime();

//2. Create a Stopwatch with a button
let swGo = document.querySelector("#sw-go");
let swStop = document.querySelector("#sw-stop");

let timeElapsed = 0;
let swTimer = 0;

function startStopwatch() {
  swTimer = setInterval(function () {
    timeElapsed += 1;
    document.querySelector("#time-seconds").innerText = timeElapsed;
  }, 1000);
}

function stopStopwatch() {
  clearInterval(swTimer);
}

swGo.addEventListener("click", startStopwatch);
swStop.addEventListener("click", stopStopwatch);

//3. Create Timer

let timerStart = document.querySelector("#start-timer");
let timeLeft = document.querySelector("#seconds-left");

let countdown = 10;
let timer = 0;
function startTimer() {
  timer = setInterval(function () {
    countdown--;
    document.querySelector("#seconds-left").innerHTML = countdown;

    if (countdown == 0) {
      clearInterval(timer);
      document.querySelector("#chime").play();
      window.alert("Finished");
    }
  }, 1000);
}

timerStart.addEventListener("click", startTimer);
