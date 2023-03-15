import { NewUser } from '../interfaces/userInterface';
import * as userModel from '../models/userModel';
import tokenGen from '../utils/tokenGen';

const createUser = async (newUser: NewUser) => {
  const user = await userModel.createUser(newUser);

  delete user.password;
  const data = tokenGen(user);
  return { status: 201, data: { token: data } };
};

const getAllUsers = async () => {};

export {
  createUser,
  getAllUsers,
};