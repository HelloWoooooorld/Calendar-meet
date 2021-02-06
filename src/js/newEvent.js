import { choice } from './render/multiselect';
import '../../node_modules/choices.js/public/assets/styles/choices.min.css';
import Table from './render/renderCalendar';
const forms = document.querySelectorAll('.event__form');
const submit = document.querySelector('.event__btn--submit');
const errorBody = document.querySelector('.event__error');
const closeBtn = document.querySelector('.event__btn--error');

// eslint-disable-next-line consistent-return
function emptyCheck(value) {
  if (Object.keys(value).length === 0 && value.constructor === Object) { return true; }
}

function showError() {
  errorBody.style.display = 'flex';
  closeBtn.addEventListener('click', () => {
    errorBody.style.display = 'none';
  });
}

function getData() {
  let inputData = new FormData(forms[0]);
  const participants = choice.getValue();
  const data = {
    time: inputData.get('time'),
    user: participants,
    title: inputData.get('nameEvent'),
    day: inputData.get('days')
  };
  const table = new Table();
  table.add(data);

  if (emptyCheck(data)) {
    console.log('not empty');
  } else {
    showError();
  }
}

function event() {
  submit.addEventListener('click', getData, false);
}

event();
