import { IUser, NewUser } from '../interfaces/userInterface';
import * as userModel from '../models/userModel';
import tokenGen from '../utils/tokenGen';

const createUser = async (newUser: NewUser) => {
  const user:IUser = await userModel.createUser(newUser);

  delete user.password;

  const token = tokenGen(user);

  return { status: 201, data: { token } };
};

const getAllUsers = async () => {};

export {
  createUser,
  getAllUsers,
};