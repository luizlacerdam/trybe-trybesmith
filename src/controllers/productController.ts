import { Request, Response } from 'express';
import * as productService from '../services/productService';

const createProduct = async (req: Request, res: Response) => {
  const newProduct = req.body;
  const { status, data } = await productService.createProduct(newProduct);
  return res.status(status).json(data);
};

const getAllProducts = async () => {
    
};

export {
  createProduct,
  getAllProducts,
};