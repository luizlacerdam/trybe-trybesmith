import Joi from 'joi';

const productSchema = {
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
};

export = {
  productSchema,
};