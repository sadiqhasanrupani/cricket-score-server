import { Request, Response, NextFunction } from 'express';
import { Schema } from 'yup';

import { HttpStatus } from '../utils/http-status';

const validation = (validationSchema: Schema) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await validationSchema.validate(req.body);
    next();
  } catch (error) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'validation error', error });
  }
};

export default validation;
