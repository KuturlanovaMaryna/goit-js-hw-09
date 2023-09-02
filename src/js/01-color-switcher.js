import '../css/common.css';

const startBtnEl = document.querySelector('[data-start]');
const stopBtnEl = document.querySelector('[data-stop]');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

let intervalId = null;

startBtnEl.addEventListener('click', () => {
  startBtnEl.disabled = true;
  stopBtnEl.disabled = false;
  intervalId = setInterval(() => {
   document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopBtnEl.addEventListener('click', () => {
  stopBtnEl.disabled = true;
  startBtnEl.disabled = false;
  clearInterval(intervalId);
});
