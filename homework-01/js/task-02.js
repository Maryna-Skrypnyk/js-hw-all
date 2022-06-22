const checkingQuantityGoods = (total, ordered) => {
  if (total < ordered) {
    return 'На складі недостатньо товарів!';
  }
  return "Замовлення оформлено, з вами зв'яжеться менеджер";
};

console.log(checkingQuantityGoods(100, 50)); // Замовлення оформлено, з вами зв'яжеться менеджер
console.log(checkingQuantityGoods(100, 20)); // Замовлення оформлено, з вами зв'яжеться менеджер
console.log(checkingQuantityGoods(100, 80)); // Замовлення оформлено, з вами зв'яжеться менеджер
console.log(checkingQuantityGoods(100, 130)); // На складі недостатньо товарів!
