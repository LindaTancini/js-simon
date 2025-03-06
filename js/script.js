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
// GENERO 5 NUMERI
let numbers;
function generateNumbers() {
  numbers = []; // array che contiene numeri casuali da 1 a 50
  for (let i = 0; i < 5; i++) {
    numbers.push(generateNumber(1, 50));
  }
}
// METTO I NUMERI RANDOM IN PAGINA
generateNumbers();
numberElement.innerHTML += `<li>${numbers}</li>`;
