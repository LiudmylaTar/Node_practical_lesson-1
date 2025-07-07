import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const modifyProducts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const products = JSON.parse(data);
    const newProducts = products.map(({ description, ...rest }) => rest);
    const newData = JSON.stringify(newProducts, null, 2);
    await fs.writeFile(PATH_DB, newData);
  } catch (error) {
    console.log(error.message);
  }
};

await modifyProducts();
console.log('Products updated successfully');
