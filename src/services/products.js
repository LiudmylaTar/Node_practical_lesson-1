import { Product } from "../db/schemas/Product.js";

export const getProducts = () => Product.find();
