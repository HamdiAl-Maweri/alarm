let intervalID  
let seconds;
const secondsInput = document.getElementById("seconds-input");
function start() {
    seconds = secondsInput.value;
    if (seconds <= 0) {
        alert("Enter a valed number");
        return;
    }
    intervalID = setInterval(() => {
        seconds--;
        if (seconds === 0) {
            clearInterval(intervalID);
            alert("Time Up");
            secondsInput.value="00"
        }
        secondsInput.value = (seconds);
    }, 1000);
}

function stop() {
  clearInterval(intervalID);
}

function reset() {
    clearInterval(intervalID);
    seconds=0
    secondsInput.value = "00";
  }
