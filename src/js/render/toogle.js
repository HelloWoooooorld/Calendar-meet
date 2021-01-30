const table = document.getElementById('table');
let el = document.querySelector('.popup');

function toogle() {
  el.style.display = (el.style.display === 'none') ? 'flex' : 'none';
}

document.querySelector('.popup__btn--no').addEventListener('click', () => {
  toogle();
});

table.onclick = function(event) {
  let target = event.target;
  if (target.tagName !== 'TD') return;
  toogle();
};

export default toogle();