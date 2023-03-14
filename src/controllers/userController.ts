import { Request, Response } from 'express';
import * as userService from '../services/userService';

const createUser = async (req: Request, res: Response) => {
  const newUser = req.body;
  const { status, data } = await userService.createUser(newUser);
  return res.status(status).json(data);
};

const getAllUsers = async () => {};

export {
  createUser,
  getAllUsers,
};