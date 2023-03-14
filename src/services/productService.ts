import { ProductToAdd } from '../interfaces/productInterface';
import * as productModel from '../models/productModel';

const createProduct = async (newProduct: ProductToAdd) => {
  const data = await productModel.createProduct(newProduct);
  return { status: 201, data };
};

const getAllProducts = async () => {
    
};

export {
  createProduct,
  getAllProducts,
};