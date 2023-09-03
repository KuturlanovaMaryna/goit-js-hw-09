import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import '../css/common.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn = document.querySelector('[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');
const dateInput = document.querySelector("#datetime-picker");
let timerId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Notify.failure('Please choose a date in the future');
      return;
    }
  }
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const addLeadingZero = value => String(value).padStart(2, 0);

flatpickr(dateInput, {...options});

startBtn.addEventListener('click', onClick);

const onClick = () => {
  timerId = setInterval(() => {
    const targetDate = new Date(dateInput.value);
  
    const diffDate = targetDateDate - new Date();
    const { days, hours, minutes, seconds } = convertMs(diffDate);
    daysRef.textContent = days;
    hoursRef.textContent = addLeadingZero(hours);
    minutesRef.textContent = addLeadingZero(minutes);
    secondsRef.textContent = addLeadingZero(seconds);

    if (diffDate < 1000) {
      clearInterval(intervalId);
    }
  }, 1000);

  }