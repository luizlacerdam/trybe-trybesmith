import { ProductToAdd } from '../../interfaces/productInterface';
import { productSchema } from './schemas';

const productValidation = (productToAdd: ProductToAdd) => {
  const { error } = productSchema.validate(productToAdd);
  if (error) {
    return { status: 422, data: { message: error.message } };
  }
  return { status: null, data: '' };
};

const outro = {

};

export {
  productValidation,
  outro,
};