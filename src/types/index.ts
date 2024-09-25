import { ValidationError } from 'express-validator';

export interface HttpError extends Error {
  httpStatusCode?: number;
  errorStack?: ValidationError[];
  isValidationErr?: boolean;
}
