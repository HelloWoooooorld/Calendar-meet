import '../../node_modules/choices.js/public/assets/styles/choices.min.css';
import { choice } from './render/multiselect';
// import { table } from './render/render-calendar';

const form = document.querySelectorAll('.event__form');
const submit = document.querySelector('.event__btn--submit');
const errorBody = document.querySelector('.event__error');
const closeBtn = document.querySelector('.event__btn--error');

function isEmpty(obj, exclude = null) {
  // eslint-disable-next-line no-param-reassign
  obj = Object.assign({}, obj);
  // eslint-disable-next-line no-restricted-syntax
  for (let key in obj) {
    // eslint-disable-next-line no-continue
    if (exclude && exclude.includes(key)) continue;
    if (obj[key] == null || obj[key] === '') return false;
  }
  return true;
}

function showError() {
  errorBody.style.display = 'flex';
  closeBtn.addEventListener('click', () => {
    errorBody.style.display = 'none';
  });
}

function getData(e) {
  e.preventDefault();
  let inputData = new FormData(form[0]);
  let selectData = new FormData(form[0]);
  const participants = choice.getValue();
  let data = {
    time: selectData.get('time'),
    user: participants,
    title: inputData.get('nameEvent'),
    day: selectData.get('days')
  };

  if (isEmpty(data)) {
    console.log(data);
  } else {
    showError();
  }
}

submit.addEventListener('click', getData, false);
