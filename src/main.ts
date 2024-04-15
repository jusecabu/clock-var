import './style.css';
import 'highlight.js/styles/vs2015.css';
import hl from 'highlight.js';
import { Clock, clockVar } from './clock';
import { clockElement, leadingZeros } from './elements';

const clock = new Clock();

function startClock(): void {
    const highlightData = hl.highlight(clockVar(clock), {
        language: 'javascript',
    }).value;
    clockElement.innerHTML = highlightData;
}

leadingZeros.addEventListener('change', (e) => {
    const element = e.target as HTMLInputElement;
    clock.leadingZero = element.checked;

    startClock();
});

startClock();
setInterval(() => startClock(), 1000);
