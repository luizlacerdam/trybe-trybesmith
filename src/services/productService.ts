import { ProductToAdd } from '../interfaces/productInterface';
import * as productModel from '../models/productModel';
import * as schema from './validation/productValidation';

const createProduct = async (newProduct: ProductToAdd) => {
  const { name, amount } = newProduct;
  const error = schema.productValidation({ name, amount });
  if (error.status) return error;
  const data = await productModel.createProduct(newProduct);
  return { status: 201, data };
};

const getAllProducts = async () => {
  const data = await productModel.getAllProducts();
  return { status: 200, data };
};

export {
  createProduct,
  getAllProducts,
};