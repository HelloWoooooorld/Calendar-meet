const table = document.getElementById('table');
let el = document.querySelector('.popup');

function toogle() {
  el.style.display = (el.style.display === 'none') ? 'flex' : 'none';
}

document.querySelector('.popup__btn--no').addEventListener('click', () => {
  toogle();
});
// eslint-disable-next-line func-names
table.onclick = function (event) {
  let target = event.target;
  if (target.tagName !== 'TD') return;
  toogle();
};

export default toogle();
