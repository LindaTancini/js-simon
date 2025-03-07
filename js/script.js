// PRENDO GLI ELEMENTI IN PAGINA
// ID COUNTDOWN
const countdownElement = document.getElementById("countdown");
console.log(countdownElement);
// ID NUMBER-LIST
const numbersListElement = document.getElementById("numbers-list");
console.log(numbersListElement);
// ID ANSWERS-FORM
const answersElement = document.getElementById("answers-form");
console.log(answersElement);
// TAG INPUT
const inputElement = document.querySelectorAll("#answers-form .form-control");
console.log(inputElement);
// ID INSTRUCTIONS
const instructionsElement = document.getElementById("instructions");
console.log(instructionsElement);
// ID MESSAGE
const messageElement = document.getElementById("message");

// CREO IL TIMER DI 30 SECONDI SCENDENDO A 0
let timeLeft = 5;
const timer = setInterval(function () {
  if (timeLeft > 0) {
    timeLeft--;
    countdownElement.textContent = timeLeft;
  } else {
    clearInterval(timer);
    console.log("tempo scaduto");
    // Finito il tempo, rimuove i numeri random generati e bisogna indovinarli
    numbersListElement.classList.add("d-none");
    answersElement.classList.remove("d-none");
    instructionsElement.innerText = "Inserisci i numeri";
  }
}, 1000);

// CREO NUMERI CASUALI DA 1 A 50
function generateRandomNumber(min, max, tot) {
  // GENERO 5 NUMERI
  const result = []; // array che contiene numeri casuali da 1 a 50
  for (let i = 0; i < tot; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    result.push(randomNumber);
  }
  return result;
}
// CREO VARIABILI DEI NUMERI
const min = 1;
const max = 50;
const totNumbers = 5;
// GENERO I NUMERI
const numbers = generateRandomNumber(min, max, totNumbers);
console.log(numbers);
// PUBBLICO IN PAGINA
let items = "";
for (let i = 0; i < totNumbers; i++) {
  const currentNumber = numbers[i];
  items += `<li>${currentNumber}</li>`;
  numbersListElement.innerHTML = items;
}

// UTENTE INSERISCE I NUMERI
answersElement.addEventListener("submit", confirm);

// FUNZIONE INSERIMENTO NUMERI
function confirm(event) {
  event.preventDefault();
  const guessedNumbers = [];
  for (let i = 0; i < inputElement.length; i++) {
    const currentNumber = inputElement[i];
    const correctNumber = parseInt(currentNumber.value);
    // VALIDIAMO I NUMERI
    if (
      correctNumber >= min &&
      correctNumber <= max &&
      !isNaN(correctNumber) &&
      !guessedNumbers.includes(correctNumber)
    ) {
      guessedNumbers.push(correctNumber);
    }
  }
  // ESITO VALIDAZIONE
  if (guessedNumbers.length !== totNumbers) {
    messageElement.innerText =
      "Hai inserito valori non validi. Non puoi giocare";
    return;
  }
  // CONTROLLO SE GLI ELEMENTI SONO CORRETTI
  const correctAnswers = [];
  for (let i = 0; i < guessedNumbers.length; i++) {
    const currentGuess = guessedNumbers[i];
    if (numbers.includes(currentGuess)) correctAnswers.push(currentGuess);
  }
  //MESSAGGIO
  if (correctAnswers.length > 0) {
    messageElement.innerText = `Hai indovinato ${correctAnswers.length} numeri; ${correctAnswers}`;
  } else {
    messageElement.innerText = `Non hai indovinato`;
  }
}
