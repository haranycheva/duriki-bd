import Joi from 'joi';
import { emailReg } from '../regex/regex.js';

export const userValidationSchema = Joi.object({
  firstName: Joi.string().min(1).max(40).required(),
  secondName: Joi.string().min(1).max(40).required(),
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(emailReg).required(),
});

export const signUoValidationSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(emailReg).required(),
});