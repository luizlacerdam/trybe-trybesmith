import IOrder from '../interfaces/orderInterface';
import connection from './connection';

const getOrderwithProductsIds = async ():Promise<IOrder[]> => {
  const [result] = await connection.execute(
    `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds 
    FROM Trybesmith.orders AS o 
    INNER JOIN Trybesmith.products AS p ON o.id = p.order_id;`,
  );
  return result as IOrder[];
};

const get = async () => {

};

export {
  get,
  getOrderwithProductsIds,
};