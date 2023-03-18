import jwt, { Secret } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

const secret:Secret = process.env.JWT_SECRET || 'password';

export default async (req:Request, res:Response, next:NextFunction) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token, secret);
    console.log(decoded);
    
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};