const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Спеції',
];

const ingredientsRef = document.querySelector('ul#ingredients');

const createIngredient = ingredient => {
  const ingredientItemRef = document.createElement('li');
  ingredientItemRef.textContent = ingredient;
  return ingredientItemRef;
};

const createIngredientsMarkup = ingredients.map(createIngredient);

ingredientsRef.append(...createIngredientsMarkup);

//////////////////////////////////

// 2

// const ingredientsEl = document.querySelector('#ingredients');

// const makeIngredientsItems = ingredients => {
//   return ingredients.map(ingredient => {
//     const itemEl = document.createElement('li');
//     itemEl.textContent = ingredient;

//     return itemEl;
//   });
// };

// const items = makeIngredientsItems(ingredients);
// ingredientsEl.append(...items);
// console.log(ingredientsEl);
