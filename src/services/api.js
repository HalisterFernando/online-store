export const getCategories = () => fetch('https://api.mercadolibre.com/sites/MLB/categories')
  .then((response) => response.json())
  .then((data) => (data))
  .catch((error) => error);

export const getProductsFromCategoryAndQuery = (categoryID, query) => fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryID}&q=${query}`).then((response) => response.json()).then((data) => (data))
  .catch((error) => error);
