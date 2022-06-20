const refs = {
  boxes: document.querySelector('div#boxes'),
  input: document.querySelector('input'),
  renderBtn: document.querySelector('button[data-action="render"]'),
  destroyBtn: document.querySelector('button[data-action="destroy"]'),
};

const createBoxes = amount => {
  destroyBoxes();
  refs.input.value = amount;
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = 30 + i * 10 + 'px';
    box.style.height = 30 + i * 10 + 'px';
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    const bgColor = `rgb(${r}, ${g}, ${b})`;
    box.style.backgroundColor = bgColor;
    box.classList.add('box');
    boxes.push(box);
  }

  console.log(refs.boxes.append(...boxes));
  return refs.boxes.append(...boxes);
};

const onRenderBoxes = () => {
  createBoxes(refs.input.value);
};

const destroyBoxes = () => {
  refs.boxes.innerHTML = '';
  refs.input.value = 0;
  return;
};

refs.renderBtn.addEventListener('click', onRenderBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);
