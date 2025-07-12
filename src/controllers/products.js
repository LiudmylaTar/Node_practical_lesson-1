import createHttpError from "http-errors";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/products.js";

export const getProductsController = async (req, res) => {
  const products = await getProducts();
  res.json({
    status: 200,
    message: "Successfully found products!",
    data: products,
  });
};

export const getProductController = async (req, res) => {
  const { productId } = req.params;
  const product = await getProductById(productId);
  if (!product) {
    throw createHttpError(404, "Contact not found");
  }
  res.json({
    status: 200,
    message: `Successfully found product with id ${productId}!`,
    data: product,
  });
};

export const createProductController = async (req, res) => {
  const result = await createProduct(req.body);
  res.status(201).json({
    status: 201,
    message: "Successfully created a product!",
    data: result,
  });
};

export const updateProductController = async (req, res, next) => {
  const result = await updateProduct(req.params.productId, req.body);
  if (!result) {
    next(createHttpError(404, "Product not found"));
    return;
  }
  res.status(200).json({
    status: 200,
    message: "Successfully patched a product!",
    data: result,
  });
};

export const deleteProductController = async (req, res, next) => {
  const result = await deleteProduct(req.params.productId);
  if (!result) {
    next(createHttpError(404, "Product not found"));
    return;
  }
  res.status(204).send();
};
