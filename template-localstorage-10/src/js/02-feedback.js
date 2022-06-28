import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/feedback-form.css';

const STORAGE_KEY = 'feedback-form';

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form  textarea'),
  inputName: document.querySelector('.js-feedback-form  input[name="name"]'),
};

/////////////// 1. Збереження в localStorage рядка - повідомлення з textarea

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 200));

// populateTextarea();

// /*
//  * - Зупиняємо поведінку по замовчуванню
//  * - Видаляємо повідомлення зі сховища
//  * - Очищуємо форму
//  */
// function onFormSubmit(evt) {
//   evt.preventDefault();

//   console.log('Відправляємо форму');
//   evt.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// /*
//  * - Отримуємо значення поля
//  * - Зберігаємо його у сховище
//  * - Можна додати throttle
//  */
// function onTextareaInput(evt) {
//   const message = evt.target.value;

//   localStorage.setItem(STORAGE_KEY, message);
// }

// /*
//  * - Отримуємо значення зі сховища
//  * - Якщо там щось було, оновлюємо DOM
//  */
// function populateTextarea() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);

//   if (savedMessage) {
//     refs.textarea.value = savedMessage;
//   }
// }

/////////////// 2. Збереження в localStorage об'єкта - всі input форми
// Зробити так, щоб зберігало не лише повідомлення, але й ім'я, і все в одному об'єкті

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 200));

const formData = {};
populateInput();

/*
 * - Зупиняємо поведінку по замовчуванню
 * - Видаляємо об'єкт зі сховища
 * - Очищуємо форму
 */
function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('Відправляємо форму');
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

/*
 * - Отримуємо значення полей
 * - Зберігаємо їх в сховище як об'єкт в вигяді рядка
 * - Можна додати throttle
 */
function onInput(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

/*
 * - Отримуємо об'єкт зі сховища
 * - Якщо там щось було, оновлюємо DOM
 */
function populateInput() {
  const savedInputObj = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedInputObj) {
    refs.textarea.value = savedInputObj.message || refs.textarea.placeholder;
    refs.inputName.value = savedInputObj.name || refs.inputName.value;
  }
}
