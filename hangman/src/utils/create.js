// create header-----------------------------------------------------------------------------------------------------------------------------------------------------------------
const wrapperBlock = document.createElement("div");
wrapperBlock.setAttribute("class", "wrapper");
const header = document.createElement("header");
header.setAttribute("class", "header");
wrapperBlock.append(header);

// create main-----------------------------------------------------------------------------------------------------------------------------------------------------------------
const main = document.createElement("main");
main.setAttribute("class", "main");

// create gallows-----------------------------------------------------------------------------------------------------------------------------------------------------------------
const gallowsPart = document.createElement("section");
gallowsPart.setAttribute("class", "gallows__part");
const gallows = document.createElement("section");
gallows.setAttribute("class", "gallows__inner");
const gallowsTree = document.createElement("div");
gallowsTree.setAttribute("class", "gallows__tree");
gallows.append(gallowsTree);

export const man = document.createElement("div");
man.setAttribute("class", "gallows__man man");
export const mansHead = document.createElement("div");
mansHead.setAttribute("class", "man__head");
man.append(mansHead);
export const mansBody = document.createElement("div");
mansBody.setAttribute("class", "man__body");
man.append(mansBody);
export const mansLeftHand = document.createElement("div");
mansLeftHand.setAttribute("class", "man__left-hand");
man.append(mansLeftHand);
export const mansRightHand = document.createElement("div");
mansRightHand.setAttribute("class", "man__right-hand");
man.append(mansRightHand);
export const mansLeftLeg = document.createElement("div");
mansLeftLeg.setAttribute("class", "man__left-leg");
man.append(mansLeftLeg);
export const mansRightLeg = document.createElement("div");
mansRightLeg.setAttribute("class", "man__right-leg");
man.append(mansRightLeg);
gallows.append(man);
gallowsPart.append(gallows);
const title = document.createElement("h1");
title.setAttribute("class", "gallows__title");
title.textContent = "Hangman";
gallowsPart.append(title);
main.append(gallowsPart);

// create quiz-----------------------------------------------------------------------------------------------------------------------------------------------------------------
const quiz = document.createElement("section");
quiz.setAttribute("class", "quiz__part");
export const secretWord = document.createElement("div");
secretWord.setAttribute("class", "quiz__secret-word");
quiz.append(secretWord);
export const quizQuestion = document.createElement("h2");
quizQuestion.setAttribute("class", "quiz__question");
quiz.append(quizQuestion);

const display = document.createElement("div");
display.setAttribute("class", "quiz__display");
const displayTitle = document.createElement("h3");
displayTitle.setAttribute("class", "quiz__display__title");
displayTitle.textContent = "Incorrect quesses:";
display.append(displayTitle);
export const incorectGuess = document.createElement("p");
incorectGuess.setAttribute("class", "quiz__display__incorect-guess");
incorectGuess.textContent = 0;
display.append(incorectGuess);
const displayAllGuess = document.createElement("p");
displayAllGuess.setAttribute("class", "quiz__display__all-guess");
displayAllGuess.textContent = "/6";
display.append(displayAllGuess);
quiz.append(display);

export const keyboard = document.createElement("div");
keyboard.setAttribute("class", "quiz__keyboard keyboard");
quiz.append(keyboard);

main.append(quiz);
wrapperBlock.append(main);

// create footer-----------------------------------------------------------------------------------------------------------------------------------------------------------------
const footer = document.createElement("footer");
footer.setAttribute("class", "footer");
wrapperBlock.append(footer);
document.body.append(wrapperBlock);
