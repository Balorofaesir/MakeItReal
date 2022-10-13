function averagePrice(arr) {
  var ResultingPrice = 0;

  for (i = 0; i < arr.length; i++) {
    ResultingPrice += arr[i].price;
  }
  return ResultingPrice / arr.length;
}
const products2 = [
  { name: "rice", price: 10 },
  { name: "panela", price: 20 },
  { name: "pasta", price: 37 },
  { name: "potato", price: 5 },
];

console.log(averagePrice(products2));

averagePrice();

console.log(recipe.price[1].name);
