import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const getProductsByMinPrice = async (price) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const products = JSON.parse(data);
    const productsByMinPrice = products.filter(
      (product) => product.price >= price,
    );
    return productsByMinPrice;
  } catch (error) {
    console.log(error.message);
  }
};
console.log(getProductsByMinPrice());

const minPrice = 800;
const result = await getProductsByMinPrice(minPrice);
console.log(result);
