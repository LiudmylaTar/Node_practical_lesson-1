import fs from 'node:fs/promises';
import { createFakeProduct } from '../utils/createFakeProduct.js';
import { PATH_DB } from '../constants/products.js';

const generateProducts = async (amount) => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const products = JSON.parse(data);
    for (let i = 0; i < amount; i += 1) {
      products.push(createFakeProduct());
    }
    const newData = JSON.stringify(products, null, 2);
    await fs.writeFile(PATH_DB, newData);
  } catch (error) {
    console.log(error.message);
  }
};
generateProducts(5);
