import '../styles/main.scss';
import { renderCalendar } from './render/render-calendar';

const root = document.getElementById('root');
root.append(renderCalendar());
