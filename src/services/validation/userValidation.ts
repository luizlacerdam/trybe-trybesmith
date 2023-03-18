import { NewUser } from '../../interfaces/userInterface';
import { userSchema } from './schemas';

const userValidation = (newUser: NewUser) => {
  const { error } = userSchema.validate(newUser);
  if (error) {
    return { status: 422, data: { message: error.message } };
  }
  return { status: null, data: '' };
};

const outro = {

};

export {
  userValidation,
  outro,
};