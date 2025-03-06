// PRENDO GLI ELEMENTI IN PAGINA
// ID COUNTDOWN
const countdownElement = document.getElementById("countdown");
console.log(countdownElement);
// ID NUMBER-LIST
const numberElement = document.getElementById("numbers-list");
console.log(numberElement);
// ID ANSWERS-FORM
const answersElement = document.getElementById("answers-form");
console.log(answersElement);

// CREO IL TIMER DI 30 SECONDI SCENDENDO A 0
let timeLeft = 30;
const timer = setInterval(function () {
  if (timeLeft > 0) {
    timeLeft--;
    countdownElement.textContent = timeLeft;
  } else {
    clearInterval(timer);
    console.log("tempo scaduto");
  }
}, 1000);

// CREO NUMERI CASUALI DA 1 A 50
function generateNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let randomNum = generateNumber(1, 50);
console.log(randomNum);
