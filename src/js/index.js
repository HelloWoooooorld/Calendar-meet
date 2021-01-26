import '../styles/main.scss';
import { eventPopup } from './render/event-popup';

const root = document.getElementById('root');
root.append(eventPopup());
