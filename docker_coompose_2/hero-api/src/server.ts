import express from 'express';
import { json } from 'body-parser';
import { setHeroRoutes } from './routes/hero.routes';
import { errorHandler } from './middleware/error.middleware';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());
setHeroRoutes(app);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});