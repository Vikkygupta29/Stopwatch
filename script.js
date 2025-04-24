let timerdisplay = document.getElementsByClassName("display-time")[0]; 
let startbtn = document.getElementById("startbtn");
let stopbtn = document.getElementById("stopbtn");
let resetbtn = document.getElementById("resetbtn");

let milisec = 0;
let sec = 0;
let min = 0;
let hr = 0;

let timerid = null; 

startbtn.addEventListener("click", function () {
  if (timerid !== null) {
    clearInterval(timerid); 
  }
  timerid = setInterval(startTimer, 10); 
});

stopbtn.addEventListener("click", function () {
  clearInterval(timerid); 
});

resetbtn.addEventListener("click", function () {
  clearInterval(timerid); 
  milisec = 0;
  sec = 0;
  min = 0;
  hr = 0;
  timerdisplay.innerHTML = `00 : 00 : 00 : 00`; 
});

function startTimer() {
  milisec++;
  if (milisec === 100) {
    milisec = 0;
    sec++;
  }
    if (sec === 60) {
      sec = 0;
      min++;
    }
      if (min === 60) {
        min = 0;
        hr++;
      }
    
 

  // show two digits
  let msec = milisec < 10 ? `0${milisec}` : milisec;
  let secs = sec < 10 ? `0${sec}` : sec;
  let mins = min < 10 ? `0${min}` : min;
  let hours = hr < 10 ? `0${hr}` : hr; //formatted with two digits
  timerdisplay.innerHTML = `${hours} : ${mins} : ${secs} : ${msec}`;
}
