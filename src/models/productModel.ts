import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { ProductToAdd, Product } from '../interfaces/productInterface';

export default async function create(newProduct: ProductToAdd): Promise<Product> {
  const { name, amount } = newProduct;
  const [result] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)`, [name, amount]);
  const { insertId: id } = result;
  return { id, ...newProduct };
}