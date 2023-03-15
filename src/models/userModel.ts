import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { NewUser, IUser } from '../interfaces/userInterface';

const createUser = async (newUser: NewUser): Promise<IUser> => {
  const { username, vocation, level, password } = newUser;

  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)',
    [username, vocation, level, password],
  );

  const { insertId: id } = result;

  return { id, ...newUser };
};

const getUserByUsername = async (username: string):Promise<IUser[]> => {
  const [user] = await connection.execute(
    'SELECT * FROM Trybesmith.users WHERE username = ?',
    [username],
  );
  return user as IUser[];
};

export {
  createUser,
  getUserByUsername,
};