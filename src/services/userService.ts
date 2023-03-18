import { IUser, LoginUser, NewUser } from '../interfaces/userInterface';
import * as userModel from '../models/userModel';
import tokenGen from '../utils/tokenGen';
import * as schema from './validation/userValidation';

const createUser = async (newUser: NewUser) => {
  const error = schema.userValidation(newUser);
  if (error.status) return error;

  const user:IUser = await userModel.createUser(newUser);

  delete user.password;

  const token = tokenGen(user);

  return { status: 201, data: { token } };
};

const userLogin = async (loginObj: LoginUser) => {
  const [user] = await userModel.getUserByUsername(loginObj);

  if (!user) return { status: 401, data: { message: 'Username or password invalid' } };
  
  delete user.password;
  const token = tokenGen({ ...user });
  return { status: 200, data: { token } };
};

export {
  createUser,
  userLogin,
};