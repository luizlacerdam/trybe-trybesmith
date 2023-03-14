import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { ProductToAdd, NewProduct } from '../interfaces/productInterface';

const createProduct = async (newProduct: ProductToAdd): Promise<NewProduct> => {
  const { name, amount } = newProduct;
  const [result] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)`, [name, amount]);
  const { insertId: id } = result;
  return { id, ...newProduct };
};

const getAllProducts = async () => {
    
};
export {
  createProduct,
  getAllProducts,
};