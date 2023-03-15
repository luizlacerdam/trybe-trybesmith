import { IUser, LoginUser, NewUser } from '../interfaces/userInterface';
import * as userModel from '../models/userModel';
import tokenGen from '../utils/tokenGen';

const createUser = async (newUser: NewUser) => {
  const user:IUser = await userModel.createUser(newUser);

  delete user.password;

  const token = tokenGen(user);

  return { status: 201, data: { token } };
};

const userLogin = async (loginObj: LoginUser) => {
  const { username } = loginObj;
  const [user]: any = await userModel.getUserByUsername(username);
  
  delete user.password;
  const token = tokenGen({ ...user });
  return { status: 200, data: { token } };
};

export {
  createUser,
  userLogin,
};