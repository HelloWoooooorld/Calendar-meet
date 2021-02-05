import { choice } from './render/multiselect';
import '../../node_modules/choices.js/public/assets/styles/choices.min.css';
import Table from './render/renderCalendar.js';
const table = new Table();
export default class Form {
  static isEmpty(obj, exclude = null) {
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

  static showError() {
    const errorBody = document.querySelector('.event__error');
    const closeBtn = document.querySelector('.event__btn--error');
    errorBody.style.display = 'flex';
    closeBtn.addEventListener('click', () => {
      errorBody.style.display = 'none';
    });
  }

  getData() {
    const form = document.querySelectorAll('.event__form');
    let inputData = new FormData(form[0]);
    const participants = choice.getValue();
    let data = {
      time: inputData.get('time'),
      user: participants,
      title: inputData.get('nameEvent'),
      day: inputData.get('days')
    };
    this.log(data);
    if (this.isEmpty(data)) {
      table.add(data);
    } else {
      this.showError();
    }
  }

  // eslint-disable-next-line class-methods-use-this
  log(msg) {
    console.log(msg);
  }
}
const form = new Form();
form.log('HUYTA');

const submit = document.querySelector('.event__btn--submit');
submit.addEventListener('click', form.getData(), false);
