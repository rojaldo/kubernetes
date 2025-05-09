"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setHeroRoutes = void 0;
const express_1 = require("express");
const hero_controller_1 = require("../controllers/hero.controller");
const router = (0, express_1.Router)();
const heroController = new hero_controller_1.HeroController();
const setHeroRoutes = (app) => {
    app.post('/api/v1/heroes', heroController.createHero.bind(heroController));
    app.get('/api/v1/heroes', heroController.getHeroes.bind(heroController));
    app.get('/api/v1/heroes/:id', heroController.getHeroById.bind(heroController));
    app.put('/api/v1/heroes/:id', heroController.updateHero.bind(heroController));
    app.delete('/api/v1/heroes/:id', heroController.deleteHero.bind(heroController));
};
exports.setHeroRoutes = setHeroRoutes;
