import { NextFunction, Request, Response } from 'express';

const userInputValidations = (req: Request, res: Response, next: NextFunction) => {
  const { username, password, vocation } = req.body;
  if (!username) return res.status(400).json({ message: '"username" is required' });

  if (!password) return res.status(400).json({ message: '"password" is required' });

  if (!vocation) return res.status(400).json({ message: '"vocation" is required' });

  next();
};

const levelInputValidation = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  console.log(level);
  
  if (level === 0) {
    return res.status(422).json(
      { message: '"level" must be greater than or equal to 1' },
    );
  }

  if (!level) return res.status(400).json({ message: '"level" is required' });

  next();
};

export {
  userInputValidations,
  levelInputValidation,
};