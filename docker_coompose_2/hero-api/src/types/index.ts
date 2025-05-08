export interface Hero {
  id: number;
  name: string;
  powers: string[];
}

// src/types/index.ts
import { Request } from 'express';

export interface HeroRequest extends Request {
  body: Partial<Hero>; // Use Partial<Hero> instead of just Hero
}

export interface HeroResponse extends Response {
  hero?: Hero;
  heroes?: Hero[];
}