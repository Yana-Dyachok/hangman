import {
  keyboard,
  incorectGuess,
  man,
  mansHead,
  mansBody,
  mansLeftHand,
  mansRightHand,
  mansLeftLeg,
  mansRightLeg,
} from "./create.js";
import { rightAnswer, getRandomWord } from "./quiz.js";
import { createPopUp } from "./popup.js";

let pressedKeys = {};

function getKeyboardBtn() {
  for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i).toLocaleUpperCase();
    button.setAttribute("class", "keyboard__btn");
    button.setAttribute("data", `Key${button.innerText}`);
    keyboard.append(button);
  }
}

getKeyboardBtn();

function getInactiveBtn(element) {
  element.classList.add("keyboard__btn--focused");
  element.disabled = true;
  element.style.cursor = "not-allowed";
  checkLetter(element.innerText);
}

function getActiveBtn() {
  const btn = document.querySelectorAll(".keyboard__btn");
  pressedKeys = {};
  btn.forEach((el) => {
    el.classList.remove("keyboard__btn--focused");
    el.disabled = false;
    el.style.cursor = "pointer";
  });
}

function getInactiveAllBtn() {
  const btn = document.querySelectorAll(".keyboard__btn");
  btn.forEach((el) => {
    el.disabled = true;
    el.style.cursor = "not-allowed";
  });
}

function clickButtons() {
  document.querySelectorAll(".keyboard__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      getInactiveBtn(btn);
    });
  });
}

clickButtons();

document.addEventListener("keydown", (event) => {
  let btn = document.querySelector(`[data="${event.code}"]`);
  
  if (btn && !pressedKeys[event.code]&& !btn.disabled) {
    event.preventDefault();
    getInactiveBtn(btn);
    pressedKeys[event.code] = true;
  }
});



// document.addEventListener("keydown", (event) => {
//   let btn = document.querySelector(`[data="${event.code}"]`);
//   if (btn) {
//     event.preventDefault();
//     getInactiveBtn(btn);
//   }
// });

function checkLetter(letter) {
  const letters = document.querySelectorAll(".quiz__letter");
  const letterArray = Array.from(letters);

  if (!rightAnswer.includes(letter)) {
      incorectGuess.innerText = +incorectGuess.innerText + 1;
      addPartOfBoddy();
  } else {
    const indices = [...rightAnswer].reduce((acc, char, index) => {
      if (char === letter) acc.push(index);
      return acc;
    }, []);

    letterArray.forEach((letterElement, i) => {
      if (indices.includes(i)) {
        letterElement.innerText = letter;
      }
    });

    if (!letterArray.some((letter) => letter.innerText.includes("_"))) {
      getInactiveAllBtn();
      setTimeout(() => createPopUp(true), 1000);
    }
  }
}

function addPartOfBoddy() {
  switch (incorectGuess.innerText) {
    case "1":
      mansHead.style.animation = "bodyPartMove 2s ease-out";
      addOpacity(1, "1");
      break;
    case "2":
      mansBody.style.animation = "bodyPartMove 2s ease-out";
      addOpacity(2, "1");
      break;
    case "3":
      mansLeftHand.style.animation = "leftPartMove 2s ease-out";
      addOpacity(3, "1");
      break;
    case "4":
      mansRightHand.style.animation = "rightPartMove 2s ease-out";
      addOpacity(4, "1");
      break;
    case "5":
      mansLeftLeg.style.animation = "leftPartMove 2s ease-out";
      addOpacity(5, "1");
      break;
    case "6":
      mansRightLeg.style.animation = "rightPartMove 1s ease-out";
      addOpacity(6, "1");
      getInactiveAllBtn();
      setTimeout(() => createPopUp(false), 1000);
      break;
  }
}

function addOpacity(length, numb) {
  const array = [
    mansHead,
    mansBody,
    mansLeftHand,
    mansRightHand,
    mansLeftLeg,
    mansRightLeg,
  ];
  for (let i = 0; i < length; i++) {
    array[i].style.opacity = numb;
  }
}

function makeManDisappear() {
  man.style.animation = "allBodyMove 2s ease-out";
  setTimeout(() => {
    man.style.opacitty = "0";
    addOpacity(6, "0");
  }, 1000);
}

export function newGame() {
  makeManDisappear();
  getRandomWord();
  getActiveBtn();
  incorectGuess.innerText = 0;
}
