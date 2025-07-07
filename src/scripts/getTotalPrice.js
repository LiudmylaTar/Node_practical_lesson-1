import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const getTotalPrice = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const products = JSON.parse(data);
    if (!Array.isArray(products)) {
      throw new Error('Invalid products data');
    }

    const totalPrice = products.reduce((total, product) => {
      return total + Number(product.price);
    }, 0);
    return totalPrice;
  } catch (error) {
    console.log(error.message);
  }
};

console.log(await getTotalPrice());
