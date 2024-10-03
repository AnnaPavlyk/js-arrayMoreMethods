function getPopularCategories(products) {
  const categorySales = {}; 

  for (let i = 0; i < products.length; i++) {
    if (products[i].sales > 5) {
      const category = products[i].category;

      if (categorySales[category]) {
        categorySales[category] += products[i].sales;
      } else {
        categorySales[category] = products[i].sales;
      }
    }
  }

  const filteredCategories = [];
  for (const category in categorySales) {
    filteredCategories.push({ category, sales: categorySales[category] });
  }

  filteredCategories.sort((a, b) => {
    if (b.sales !== a.sales) {
      return b.sales - a.sales;
    }
    return a.category.localeCompare(b.category);
  });

  return filteredCategories.map(item => item.category);
}

const products = [
  { name: 'Phone', category: 'Electronics', sales: 10 },
  { name: 'Tablet', category: 'Electronics', sales: 3 },
  { name: 'Shirt', category: 'Clothing', sales: 8 },
  { name: 'Laptop', category: 'Electronics', sales: 12 },
  { name: 'Jacket', category: 'Clothing', sales: 2 },
  { name: 'Shoes', category: 'Footwear', sales: 6 },
  { name: 'Watch', category: 'Electronics', sales: 7 }
];

console.log(getPopularCategories(products)); // ['Electronics', 'Clothing', 'Footwear']

module.exports = getPopularCategories;
