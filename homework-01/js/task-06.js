// const makeTotal = () => {
//   let total = 0;
//   let input;

//   while (input !== null) {
//     input = prompt('Введіть число');
//     if (Number(input).isNaN) {
//       alert('Було написано не число, спробуйте ще раз');
//       console.log('Було написано не число, спробуйте ще раз');
//     }
//     total += Number(input);
//   }

//   alert(total);
// };

// console.log(makeTotal());

let total = 0;
let input;

while (input !== null) {
  input = prompt('Введіть число');
  if (typeof Number(input) === NaN) {
    alert('Було написано не число, спробуйте ще раз');
  }

  total += Number(input);
}

alert(total);
