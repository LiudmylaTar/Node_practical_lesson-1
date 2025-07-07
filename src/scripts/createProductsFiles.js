import fs from 'node:fs/promises';
import path from 'node:path';
import { PATH_FILES_DIR } from '../constants/products.js';
import { PATH_DB } from '../constants/products.js';

const createProductsFiles = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const products = JSON.parse(data);
    for (const product of products) {
      const fileName =
        product.name.toLowerCase().split(' ').join('-') + '.json';
      const filePath = path.join(PATH_FILES_DIR, fileName);
      const productData = JSON.stringify(product, null, 2);

      await fs.writeFile(filePath, productData);
      console.log('Файли створено успішно!');
    }
  } catch (error) {
    console.log(error.message);
  }
};
await createProductsFiles();
