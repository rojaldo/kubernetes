// src/services/hero.service.ts
import { Hero } from '../types';
import { v4 as uuidv4 } from 'uuid';

export class HeroService {
    private heroes: Hero[] = [];

    create(hero: Omit<Hero, 'id'>): Hero {
        // Generate a new ID for the hero as a number
        const newId = this.heroes.length + 1;
        const newHero = {
            ...hero,
            id: newId
        };
        this.heroes.push(newHero);
        return newHero;
    }

    // Add the missing methods that are being called in the controller
    
    async getAll(): Promise<Hero[]> {
        return this.heroes;
    }

    async getById(id: string | number): Promise<Hero | undefined> {
        // Convert both to the same type for comparison
        return this.heroes.find(hero => hero.id === Number(id));
    }

    async update(id: string | number, heroData: Partial<Hero>): Promise<Hero | null> {
        const index = this.heroes.findIndex(hero => hero.id === Number(id));
        if (index !== -1) {
            const updatedHero = { ...this.heroes[index], ...heroData };
            this.heroes[index] = updatedHero;
            return updatedHero;
        }
        return null;
    }

    async delete(id: string | number): Promise<Hero | null> {
        const index = this.heroes.findIndex(hero => hero.id === Number(id));
        if (index !== -1) {
            const deletedHero = this.heroes[index];
            this.heroes.splice(index, 1);
            return deletedHero;
        }
        return null;
    }
}