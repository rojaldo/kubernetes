"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroController = void 0;
const hero_service_1 = require("../services/hero.service");
class HeroController {
    constructor() {
        this.createHero = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const hero = req.body;
                const newHero = yield this.heroService.create(hero);
                res.status(201).json(newHero);
            }
            catch (error) {
                res.status(500).json({ message: 'Error creating hero', error });
            }
        });
        this.getHeroes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const heroes = yield this.heroService.getAll();
                res.status(200).json(heroes);
            }
            catch (error) {
                res.status(500).json({ message: 'Error retrieving heroes', error });
            }
        });
        this.getHeroById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const heroId = req.params.id;
                const hero = yield this.heroService.getById(heroId);
                if (hero) {
                    res.status(200).json(hero);
                }
                else {
                    res.status(404).json({ message: 'Hero not found' });
                }
            }
            catch (error) {
                res.status(500).json({ message: 'Error retrieving hero', error });
            }
        });
        this.updateHero = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const heroId = req.params.id;
                const heroData = req.body;
                const updatedHero = yield this.heroService.update(heroId, heroData);
                if (updatedHero) {
                    res.status(200).json(updatedHero);
                }
                else {
                    res.status(404).json({ message: 'Hero not found' });
                }
            }
            catch (error) {
                res.status(500).json({ message: 'Error updating hero', error });
            }
        });
        this.deleteHero = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const heroId = req.params.id;
                const deletedHero = yield this.heroService.delete(heroId);
                if (deletedHero) {
                    res.status(204).send();
                }
                else {
                    res.status(404).json({ message: 'Hero not found' });
                }
            }
            catch (error) {
                res.status(500).json({ message: 'Error deleting hero', error });
            }
        });
        this.heroService = new hero_service_1.HeroService();
    }
}
exports.HeroController = HeroController;
