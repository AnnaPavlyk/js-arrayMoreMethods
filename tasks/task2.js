function getProductsNotInPriceRange(products) {
  return products
    .filter(product => product.price < 100 || product.price > 500)
    .map(product => product.name); 
}

const products = [
  { name: 'Laptop', price: 800 },
  { name: 'Phone', price: 250 },
  { name: 'Shirt', price: 30 },
  { name: 'Watch', price: 120 },
  { name: 'Tablet', price: 550 },
  { name: 'Shoes', price: 75 },
  { name: 'PlayStation', price: 590 }
];

console.log(getProductsNotInPriceRange(products)); 

module.exports = getProductsNotInPriceRange;
