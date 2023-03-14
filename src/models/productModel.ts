import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { ProductToAdd, NewProduct, IProduct } from '../interfaces/productInterface';

const createProduct = async (newProduct: ProductToAdd): Promise<NewProduct> => {
  const { name, amount } = newProduct;
  const [result] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)`, [name, amount]);
  const { insertId: id } = result;
  return { id, ...newProduct };
};

const getAllProducts = async (): Promise<IProduct[]> => {
  const [products] = await connection.execute('SELECT * FROM Trybesmith.products');
  return products as IProduct[];
};
export {
  createProduct,
  getAllProducts,
};