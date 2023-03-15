import { Request, Response } from 'express';
import * as orderService from '../services/orderService';

const getOrderwithProductsIds = async (req: Request, res: Response) => {
  const { status, data } = await orderService.getOrderwithProductsIds();
  return res.status(status).json(data);
};

const get = () => {

};

export {
  getOrderwithProductsIds,
  get,
};