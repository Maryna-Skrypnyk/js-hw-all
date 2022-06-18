const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', e => {
  outputRef.textContent =
    e.currentTarget.value.trim() !== '' ? e.currentTarget.value : 'незнайомець';
});

//////////////////
// 2

// const refs = {
//   input: document.querySelector('#name-input'),
//   output: document.querySelector('#name-output'),
// };

// const onInputChange = event => {
//   refs.output.textContent =
//     event.currentTarget.value !== ''
//       ? event.currentTarget.value
//       : 'незнайомець';
// };

// refs.input.addEventListener('input', onInputChange);
