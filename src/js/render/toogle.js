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
  let target = event.target;
  if (target.textContent !== '') {
    toogle();
    popupTitle.innerHTML = `Are you sure you want delete ${event.target.textContent} ?`;
  }
  popupYes.addEventListener('click', () => {
    const data = JSON.parse(localStorage.getItem('data'));
    console.log(data.data, 'data.data');
    Object.entries(data.data).map((item) => item[1]
      .filter(val => val.id === event.target.id ? table.remove(val.id) : console.log('null')));
  });
};

export default toogle();
