import '../styles/main.scss';
// eslint-disable-next-line no-unused-vars
import Table from './render/renderCalendar';
// eslint-disable-next-line no-unused-vars

const table = new Table();

table.render();
table.filter();
