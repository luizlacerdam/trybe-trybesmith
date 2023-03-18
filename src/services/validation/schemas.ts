import Joi from 'joi';

const productSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const userSchema = Joi.object({
  username: Joi.string().min(3).required(),
  password: Joi.string().min(8).required(),
  level: Joi.number().greater(1).positive().required(),
  vocation: Joi.string().min(3).required(),
});

export {
  productSchema,
  userSchema,
};