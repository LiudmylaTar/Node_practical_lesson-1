import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const groupProductsByCategories = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const products = JSON.parse(data);
    const groupedByCategory = {};

    products.forEach((product) => {
      const category = product.category;

      if (!groupedByCategory[category]) {
        groupedByCategory[category] = [];
      }

      groupedByCategory[category].push(product.name);
    });
    return groupedByCategory;
  } catch (error) {
    console.log(error.message);
  }
};

console.log(await groupProductsByCategories());
