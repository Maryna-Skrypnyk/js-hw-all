const inputRef = document.querySelector('#validation-input');

const onInputBlur = e => {
  //   console.log(inputRef.dataset.length);
  //   console.log(inputRef.getAttribute('data-length'));
  return e.currentTarget.value.length === Number(inputRef.dataset.length)
    ? inputRef.classList.add('valid')
    : inputRef.classList.add('invalid');
};

const onInputFocus = e => {
  inputRef.classList.remove('valid', 'invalid');
};

inputRef.addEventListener('blur', onInputBlur);
inputRef.addEventListener('focus', onInputFocus);
