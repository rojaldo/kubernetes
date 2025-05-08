import { Router } from 'express';
import { HeroController } from '../controllers/hero.controller';

const router = Router();
const heroController = new HeroController();

export const setHeroRoutes = (app: any) => {
    app.post('/api/v1/heroes', heroController.createHero.bind(heroController));
    app.get('/api/v1/heroes', heroController.getHeroes.bind(heroController));
    app.get('/api/v1/heroes/:id', heroController.getHeroById.bind(heroController));
    app.put('/api/v1/heroes/:id', heroController.updateHero.bind(heroController));
    app.delete('/api/v1/heroes/:id', heroController.deleteHero.bind(heroController));
}

