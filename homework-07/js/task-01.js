const categoriesRef = document.querySelectorAll('#categories .item');
console.log(`У списку ${categoriesRef.length} категорії.`); // У списку 3 категорії.

//////////////

const categoriesEl = document.querySelector('ul#categories').children;
console.log(`У списку ${categoriesEl.length} категорії.`); // У списку 3 категорії.

/////////////////////////////

const getCategory = category => {
  const categoryTitleRef = category.querySelector('.item h2');
  const categoryItemsRef = category.querySelectorAll('li');
  //   const categoryItemsRef = category.querySelector('li ul').children;

  return `- Категорія: ${categoryTitleRef.textContent}
- Кількість елементів: ${categoryItemsRef.length}`;
};

categoriesRef.forEach(category => console.log(getCategory(category)));

// Категорія: Тварини
// Кількість елементів: 4
// Категорія: Продукти
// Кількість елементів: 3
// Категорія: Технології
// Кількість елементів: 5

/////////////////////////////
