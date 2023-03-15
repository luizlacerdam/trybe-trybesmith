import { Request, Response } from 'express';
import * as userService from '../services/userService';

const createUser = async (req: Request, res: Response): Promise<Response> => {
  const newUser = req.body;
  const { status, data } = await userService.createUser(newUser);
  return res.status(status).json(data);
};

const userLogin = async (req: Request, res: Response) => {
  const loginObg = req.body;
  const { status, data } = await userService.userLogin(loginObg);
  return res.status(status).json(data);
};

export {
  createUser,
  userLogin,
};