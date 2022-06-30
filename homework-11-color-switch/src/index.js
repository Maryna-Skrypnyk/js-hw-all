// // import './sass/index.scss';
import colors from './js/colors-data';

const refs = {
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
};

const COLOR_SWITCH_DELAY = 1000;
const COLOR_SWITCH_KEY = 'color-switch-key';
let colorIntervalId = null;
refs.btnStop.disabled = true;

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const onBtnStartClick = e => {
  e.target.disabled = true;
  refs.btnStop.disabled = false;

  if (colorIntervalId) {
    return;
  }

  colorIntervalId = setInterval(() => {
    document.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
    localStorage.setItem(COLOR_SWITCH_KEY, document.body.style.backgroundColor);
    console.log(colors[randomIntegerFromInterval(0, colors.length - 1)]);
  }, COLOR_SWITCH_DELAY);
};

const onBtnStopClick = e => {
  e.target.disabled = true;
  refs.btnStart.disabled = false;
  clearInterval(colorIntervalId);
  localStorage.setItem(COLOR_SWITCH_KEY, document.body.style.backgroundColor);
  colorIntervalId = null;
};

const savedColor = () => {
  const saveColor = localStorage.getItem(COLOR_SWITCH_KEY);

  if (saveColor) {
    document.body.style.backgroundColor = saveColor;
  }
};

savedColor();

refs.btnStart.addEventListener('click', onBtnStartClick);
refs.btnStop.addEventListener('click', onBtnStopClick);
