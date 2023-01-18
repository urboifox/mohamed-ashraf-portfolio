window.onload = function () {
  Particles.init({
    selector: ".background",
  });
};

let navLinks = document.querySelectorAll(`nav .links a`);

document.addEventListener(`scroll`, () => {
  const sections = document.querySelectorAll(`section`);
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute(`id`);
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove(`active`);
    if (link.classList.contains(current)) {
      link.classList.add(`active`);
    }
  });
});

let ageP = document.getElementById(`age`);
let span = document.createElement(`span`);
let dateNow = new Date();
let birthday = new Date(`Feb 15 2004`);
let dateDiff = dateNow - birthday;
let age = dateDiff / 1000 / 60 / 60 / 24 / 365;
age = Math.floor(age);
let ageText = document.createTextNode(age);
span.innerText = `Age: `;
ageP.appendChild(span);
ageP.appendChild(ageText);

let expP = document.getElementById(`exp`);
let expSpan = document.createElement(`span`);
let roadStart = new Date("2021");
let expDateDiff = dateNow - roadStart;
let expYears = expDateDiff / 1000 / 60 / 60 / 24 / 365;
expYears = Math.floor(expYears);
expSpan.innerText = `Experience: `;
expP.appendChild(expSpan);
expP.appendChild(document.createTextNode(expYears));

const linksHolder = document.getElementById(`linksHolder`);
const checkbtn = document.getElementById(`checkbtn`);

let clickCounter = 0;
let states = [`disabled`, `active`];
let trueOrFalse;
let state = states[0];
let checkSpanOne = document.getElementById(`spanOne`);
let checkSpanTwo = document.getElementById(`spanTwo`);
let checkSpanThree = document.getElementById(`spanThree`);

checkbtn.addEventListener(`click`, () => {
  if (state === `disabled`) {
    linksHolder.style.cssText = `right: -25px;`;
    checkSpanOne.style.cssText = `top:50%;left:50%;transform: translate(-50%, -50%) rotate(45deg);`;
    checkSpanTwo.style.cssText = `opacity: 0;`;
    checkSpanThree.style.cssText = `top:50%;left:50%;transform: translate(-50%, -50%) rotate(-45deg);`;
  } else {
    linksHolder.style.cssText = `right: -120%;`;
    checkSpanOne.style.cssText = ``;
    checkSpanTwo.style.cssText = `opacity: 1;`;
    checkSpanThree.style.cssText = ``;
  }
  clickCounter++;
  trueOrFalse = clickCounter % 2;
  state = states[trueOrFalse];
});

window.addEventListener(`click`, (e) => {
  if (state === `active` && !e.target.classList.contains(`clickable`)) {
    linksHolder.style.cssText = `right: -120%;`;
    clickCounter++;
    trueOrFalse = clickCounter % 2;
    state = states[trueOrFalse];
    checkSpanOne.style.cssText = ``;
    checkSpanTwo.style.cssText = `opacity: 1;`;
    checkSpanThree.style.cssText = ``;
  }
});

const nav = document.getElementById(`nav`);
window.addEventListener(`scroll`, () => {
  if (scrollY >= 50) {
    nav.style.backgroundColor = `rgba(7, 5, 9, 1)`;
  } else {
    nav.style.backgroundColor = `rgba(7, 5, 9, 0)`;
  }
});

const loader = document.getElementById(`loader`);

window.addEventListener(`load`, () => {
  setTimeout(() => {
    loader.style.cssText = `
  opacity: 0;
  z-index: -1000`;
  }, 500);
});
