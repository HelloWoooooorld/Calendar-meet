import { choice } from './render/multiselect';
import '../../node_modules/choices.js/public/assets/styles/choices.min.css';

const forms = document.querySelectorAll('.event__form');
const submit = document.querySelector('.event__btn--submit');
const errorBody = document.querySelector('.event__error');
const closeBtn = document.querySelector('.event__btn--error');
class Form {
  static showError() {
    errorBody.style.display = 'flex';
    closeBtn.addEventListener('click', () => {
      errorBody.style.display = 'none';
    });
  }

  getData() {
    let inputData = new FormData(forms[0]);
    const participants = choice.getValue();
    const data = {
      time: inputData.get('time'),
      user: participants,
      title: inputData.get('nameEvent'),
      day: inputData.get('days')
    };

    if (this.emptyCheck(data)) {
      console.log('not empty');
    } else {
      this.showError();
    }
  }

  // eslint-disable-next-line consistent-return
  emptyCheck(value) {
    if (Object.keys(this.value).length === 0 && value.constructor === Object) { return true; }
  }

  static log(msg) {
    console.log(msg);
  }

  event() {
    submit.addEventListener('click', this.getData, false);
  }
}

const form = new Form();
form.event();

export default Form;
