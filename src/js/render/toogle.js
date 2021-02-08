/* eslint-disable guard-for-in */
import table from '../render/renderCalendar';

const allTable = document.getElementById('table');
let el = document.querySelector('.popup');
let popupTitle = document.querySelector('.popup__title');
const popupYes = document.querySelector('.popup__btn--yes');
const popupNo = document.querySelector('.popup__btn--no');

export function toogle() {
  el.style.display = (el.style.display === 'none') ? 'flex' : 'none';
}

popupNo.addEventListener('click', () => {
  toogle();
});

popupYes.addEventListener('click', () => {
  toogle();
});

// eslint-disable-next-line func-names
allTable.onclick = function (event) {
  toogle();
  let target = event.target;
  popupTitle.innerHTML = `Are you sure you want delete ${event.target.textContent} ?`;
  if (target.tagName !== 'TD' || target.textContent === '') return;
  popupYes.addEventListener('click', () => {
    const data = JSON.parse(localStorage.getItem('data'));
    // eslint-disable-next-line no-restricted-syntax
    for (let key in data.data) {
      let obj = data.data[key];
      // eslint-disable-next-line no-restricted-syntax
      for (let prop in obj) {
        if (obj[prop].title === event.target.textContent) {
          table.remove(obj[prop]);
        }
      }
    }
  });
};

export default toogle();
