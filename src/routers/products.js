import { Router } from "express";

import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import {
  getProductsController,
  getProductController,
  createProductController,
  updateProductController,
  deleteProductController,
} from "../controllers/products.js";

const productsRouter = Router();

productsRouter.get("/", ctrlWrapper(getProductsController));

productsRouter.get("/:productId", ctrlWrapper(getProductController));

productsRouter.post("/", ctrlWrapper(createProductController));

productsRouter.patch("/:productId", ctrlWrapper(updateProductController));

productsRouter.delete("/:productId", ctrlWrapper(deleteProductController));

export default productsRouter;
