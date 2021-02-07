import { choice } from './render/multiselect';
import '../../node_modules/choices.js/public/assets/styles/choices.min.css';
import table from './render/renderCalendar';
const forms = document.querySelectorAll('.event__form');
const submit = document.querySelector('.event__btn--submit');
const errorBody = document.querySelector('.event__error');
const closeBtn = document.querySelector('.event__btn--error');
const eventMsg = document.querySelector('.event__mgs');
const link = document.querySelector('.submit__link');

// eslint-disable-next-line consistent-return
link.removeAttribute('href');

function emptyCheck(value) {
  if (value.time.length !== 0
    && value.title.length !== 0
    && value.user.length !== 0
    && value.day.length !== 0) {
    link.setAttribute('href', './index.html');
    return true;
  }
  return false;
}

function showError(msg) {
  eventMsg.textContent = msg;
  errorBody.style.display = 'flex';
  closeBtn.addEventListener('click', () => {
    errorBody.style.display = 'none';
  });
}

function getData() {
  link.removeAttribute('href');
  let inputData = new FormData(forms[0]);
  const participants = choice.getValue();
  const data = {
    time: inputData.get('time'),
    user: participants,
    title: inputData.get('nameEvent'),
    day: inputData.get('days')
  };
  if (emptyCheck(data)) {
    table.add(data);
  } else {
    showError('All place is required');
  }
}

function event() {
  submit.addEventListener('click', getData, false);
}

event();
