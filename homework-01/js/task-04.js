const credits = 23580;
const pricePerDroid = 3000;
const question = 'Яку кількість дроїдів ви бажаєте придбати?';

const makeMessage = (credits, pricePerDroid, question) => {
  const input = prompt(question);
  if (input === null) {
    return 'Скасовано користувачем!';
  }
  const totalPrice = Number(input) * pricePerDroid;
  if (totalPrice > credits) {
    return 'Недостатньо коштів на рахунку!';
  }
  return `Ви купили ${input} дроїдів, на рахунку залишилося ${
    credits - totalPrice
  } кредитів.`;
};

console.log(makeMessage(credits, pricePerDroid, question));
