import { NewUser } from '../interfaces/userInterface';
import * as userModel from '../models/userModel';

const createUser = async (newUser: NewUser) => {
  const data = await userModel.createUser(newUser);
  return { status: 201, data };
};

const getAllUsers = async () => {};

export {
  createUser,
  getAllUsers,
};