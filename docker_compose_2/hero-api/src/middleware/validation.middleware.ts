import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import { Hero } from '../models/hero.model';

export const validateHero = [
  body('name').isString().notEmpty().withMessage('Name is required and must be a string.'),
  body('powers').isArray().withMessage('Powers must be an array.'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];