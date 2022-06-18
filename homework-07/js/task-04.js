const counterRef = document.querySelector('#counter');

let counterValue = 0;

const makeIncrement = step => (counterValue += step);
const makeDecrement = step => (counterValue -= step);

const incrementBtnRef = counterRef.querySelector(
  'button[data-action="increment"]',
);
const decrementBtnRef = counterRef.querySelector(
  'button[data-action="decrement"]',
);
const contentCount = counterRef.querySelector('#value');

incrementBtnRef.addEventListener(
  'click',
  () => (contentCount.textContent = makeIncrement(1)),
);

decrementBtnRef.addEventListener(
  'click',
  () => (contentCount.textContent = makeDecrement(1)),
);
