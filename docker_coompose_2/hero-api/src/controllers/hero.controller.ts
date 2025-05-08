import { Request, Response } from 'express';
import { HeroService } from '../services/hero.service';
import { Hero } from '../models/hero.model';

export class HeroController {
    private heroService: HeroService;

    constructor() {
        this.heroService = new HeroService();
    }

    public createHero = async (req: Request, res: Response): Promise<void> => {
        try {
            const hero: Hero = req.body;
            const newHero = await this.heroService.create(hero);
            res.status(201).json(newHero);
        } catch (error) {
            res.status(500).json({ message: 'Error creating hero', error });
        }
    };

    public getHeroes = async (req: Request, res: Response): Promise<void> => {
        try {
            const heroes = await this.heroService.getAll();
            res.status(200).json(heroes);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving heroes', error });
        }
    };

    public getHeroById = async (req: Request, res: Response): Promise<void> => {
        try {
            const heroId = req.params.id;
            const hero = await this.heroService.getById(heroId);
            if (hero) {
                res.status(200).json(hero);
            } else {
                res.status(404).json({ message: 'Hero not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving hero', error });
        }
    };

    public updateHero = async (req: Request, res: Response): Promise<void> => {
        try {
            const heroId = req.params.id;
            const heroData: Hero = req.body;
            const updatedHero = await this.heroService.update(heroId, heroData);
            if (updatedHero) {
                res.status(200).json(updatedHero);
            } else {
                res.status(404).json({ message: 'Hero not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating hero', error });
        }
    };

    public deleteHero = async (req: Request, res: Response): Promise<void> => {
        try {
            const heroId = req.params.id;
            const deletedHero = await this.heroService.delete(heroId);
            if (deletedHero) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Hero not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting hero', error });
        }
    };
}