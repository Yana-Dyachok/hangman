import { quizData } from "./quiz-data.js";
import { secretWord, quizQuestion } from "./create.js";

let tempNumb;
let prevTempNumb = getLocalStorage() || 0;
export let rightAnswer = "";

export function getRandomWord() {
  tempNumb = Math.floor(Math.random() * (quizData.length - 1));
  setLocalStorage();
  if (tempNumb === prevTempNumb) tempNumb += 1;
  const { question, answer } = quizData[tempNumb];
  quizQuestion.innerText = question;
  rightAnswer = answer.toUpperCase();
  console.log(`Right answer is - "${rightAnswer}"`);
  secretWord.innerHTML = answer
    .split("")
    .map(() => `<li class="quiz__letter">_</li>`)
    .join("");
}

getRandomWord();

// save random quiz in localStorage ----------------------------------------------------------------------------------------------------------
function setLocalStorage() {
  localStorage.setItem("tempNumb", tempNumb);
}

function getLocalStorage() {
  const storedValue = localStorage.getItem("tempNumb");
  return parseInt(storedValue, 10);
}

window.addEventListener("load", getLocalStorage);
window.addEventListener("beforeunload", setLocalStorage);
