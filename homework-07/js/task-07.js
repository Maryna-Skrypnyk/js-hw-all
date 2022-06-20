const refs = {
  input: document.querySelector('input#font-size-control'),
  content: document.querySelector('span#text'),
};

const onInputChange = e => {
  refs.content.style.fontSize = `${e.target.value / 2}px `;
};

refs.input.addEventListener('input', onInputChange);
