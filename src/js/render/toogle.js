const allTable = document.getElementById('table');
let el = document.querySelector('.popup');
let popupTitle = document.querySelector('.popup__title');

export function toogle() {
  el.style.display = (el.style.display === 'none') ? 'flex' : 'none';
}

document.querySelector('.popup__btn').addEventListener('click', () => {
  toogle();
});

// eslint-disable-next-line func-names
allTable.onclick = function (event) {
  let target = event.target;
  popupTitle.innerHTML = `Are you sure you want delete ${event.target.textContent} ?`;
  if (target.tagName !== 'TD' || target.innerHTML === '') return;
  toogle();
  console.log(JSON.parse(localStorage.getItem(event.target.textContent)));
};

export default toogle();
