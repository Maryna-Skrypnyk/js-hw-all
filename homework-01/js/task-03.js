const ADMIN_PASSWORD = 'jqueryismyjam';

const adminAuthorization = password => {
  let message = '';
  const input = prompt('Введіть ваш пароль');
  console.log(input);
  if (input === password) {
    message = 'Ласкаво просимо!';
    return message;
  }
  if (input === null) {
    message = 'Скасовано користувачем!';
    return message;
  }

  message = 'Доступ заборонений, невірний пароль!';
  return message;
};

console.log(adminAuthorization(ADMIN_PASSWORD));
