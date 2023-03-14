import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { NewUser, IUser } from '../interfaces/userInterface';

const createUser = async (newUser: NewUser): Promise<NewUser> => {

};

const getAllUsers = async () => {

};

export {
  createUser,
  getAllUsers,
};