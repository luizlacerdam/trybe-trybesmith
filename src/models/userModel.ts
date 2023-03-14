import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { NewUser } from '../interfaces/userInterface';

const createUser = async (newUser: NewUser) => {
  const { username, vocation, level, password } = newUser;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)',
    [username, vocation, level, password],
  );
  const { insertId: id } = result;
  return { id, ...result };
};

const getAllUsers = async () => {

};

export {
  createUser,
  getAllUsers,
};