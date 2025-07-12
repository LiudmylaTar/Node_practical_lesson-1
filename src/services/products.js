import { Product } from "../db/schemas/Product.js";

export const getProducts = () => Product.find();

export const getProductById = (productId) => Product.findById(productId);

export const createProduct = (payload) => Product.create(payload);

export const updateProduct = (productId, payload) =>
  Product.findByIdAndUpdate(productId, payload, {
    new: true,
  });

export const deleteProduct = (productId) =>
  Product.findByIdAndDelete(productId);
