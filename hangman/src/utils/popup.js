import { rightAnswer } from "./quiz.js";
import { newGame } from "./keyboard.js";

export function createPopUp(flag) {
  const popup = document.createElement("div");
  popup.classList.add("popup");

  const popupBody = document.createElement("div");
  popupBody.classList.add("popup__body");

  const popupContent = document.createElement("div");
  popupContent.classList.add("popup__content");

  const popupText = document.createElement("h3");
  popupText.classList.add("popup__text");
  popupText.textContent = flag
    ? "Сongratulations! You won!"
    : "Unfortunately, you lost!";

  const spanWord = document.createElement("span");
  spanWord.classList.add("popup__span-word");
  spanWord.textContent = `"${rightAnswer.toLowerCase()}"`;

  const showWord = document.createElement("h4");
  showWord.classList.add("popup__word");
  showWord.textContent = `Secret word: `;

  const closeButton = document.createElement("button");
  closeButton.classList.add("popup__close-btn");
  closeButton.textContent = "Play Again";

  closeButton.addEventListener("click", () => {
    popup.classList.toggle("target");
    newGame();
  });

  showWord.append(spanWord);
  popupContent.append(popupText);
  popupContent.append(showWord);
  popupContent.append(closeButton);

  popupBody.append(popupContent);

  popup.append(popupBody);
  document.body.append(popup);
}
