import '../styles/main.scss';
import createTable from './render/render-calendar';

// const root = document.getElementById('root');

let selectedTd;
const table = document.getElementById('table');

function highlight(td) {
  if (selectedTd) {
    // убрать существующую подсветку, если есть
    selectedTd.classList.remove('highlight');
  }
  selectedTd = td;
  selectedTd.classList.add('highlight'); // подсветить новый td
}

table.addEventListener('click', (event) => {
  let target = event.target; // где был клик?

  if (target.tagName !== 'TD') return; // не на TD? тогда не интересует
  highlight(target); // подсветить TD
});

createTable();
