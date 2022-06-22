const input = prompt('Введіть назву країни для доставки');

const makeMessage = country => {
  let price;
  country = input;
  if (country === null) {
    return alert('Відміна');
  }

  const message = `Доставка в ${country} буде коштувати`;

  switch (country.toLowerCase()) {
    case 'китай':
      price = 100;
      alert(`${message} ${price} кредитів`);
      break;

    case 'чилі':
      price = 250;
      alert(`${message} ${price} кредитів`);
      break;

    case 'австралія':
      price = 170;
      alert(`Доставка в ${country} буде коштувати ${price} кредитів`);
      break;

    case 'індія':
      price = 80;
      alert(`Доставка в ${country} буде коштувати ${price} кредитів`);
      break;

    case 'ямайка':
      price = 120;
      alert(`Доставка в ${country} буде коштувати ${price} кредитів`);
      break;

    default:
      alert('У вашій країні доставка недоступна');
  }
  console.log(`Дякуємо за увагу`);
};

console.log(makeMessage());
