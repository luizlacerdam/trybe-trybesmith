import * as orderModel from '../models/orderModel';

const getOrderwithProductsIds = async () => {
  const orders = await orderModel.getOrderwithProductsIds();
  return { status: 200, data: orders };
};

const get = () => {

};

export {
  get, 
  getOrderwithProductsIds,
};