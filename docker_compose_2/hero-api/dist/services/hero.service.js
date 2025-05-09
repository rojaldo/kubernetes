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
exports.HeroService = void 0;
class HeroService {
    constructor() {
        this.heroes = [];
    }
    create(hero) {
        // Generate a new ID for the hero as a number
        const newId = this.heroes.length + 1;
        const newHero = Object.assign(Object.assign({}, hero), { id: newId });
        this.heroes.push(newHero);
        return newHero;
    }
    // Add the missing methods that are being called in the controller
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.heroes;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // Convert both to the same type for comparison
            return this.heroes.find(hero => hero.id === Number(id));
        });
    }
    update(id, heroData) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.heroes.findIndex(hero => hero.id === Number(id));
            if (index !== -1) {
                const updatedHero = Object.assign(Object.assign({}, this.heroes[index]), heroData);
                this.heroes[index] = updatedHero;
                return updatedHero;
            }
            return null;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.heroes.findIndex(hero => hero.id === Number(id));
            if (index !== -1) {
                const deletedHero = this.heroes[index];
                this.heroes.splice(index, 1);
                return deletedHero;
            }
            return null;
        });
    }
}
exports.HeroService = HeroService;
