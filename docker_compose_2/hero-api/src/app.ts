import express from 'express';
import { json } from 'body-parser';
import { setHeroRoutes } from './routes/hero.routes';
import { errorHandler } from './middleware/error.middleware';

const app = express();

app.use(json());

setHeroRoutes(app);

app.use(errorHandler);

export default app;