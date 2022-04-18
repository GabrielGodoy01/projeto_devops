import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import Music from '../models/music'
import Repository from '../repositories/repository_mock'
const {v4: uuidv4} = require('uuid')
export class Controller {

    repository : Repository;

    constructor(repository : Repository) {
        this.repository = repository;
    }

    getAllMusics = async (req: Request, res: Response, next: NextFunction) => {
        return res.status(200).json(this.repository.getAllMusics());
    };

    updateMusic = async (req: Request, res: Response, next: NextFunction) => {
        if(req.body.review > 5){
            res.status(400).send('Valor inválido, maior do que 5.')
            return 
        }
        const musicToUpdate = this.repository.getMusicByName(req.body.name);
        musicToUpdate!.review = req.body.review;
        this.repository.updateReview(musicToUpdate!);
        res.status(200).json(musicToUpdate);
    };

    addMusic = async (req: Request, res: Response, next: NextFunction) => {
        const music = new Music(uuidv4(), req.body.name, 0);
        this.repository.createMusic(music);
        res.status(200).json(music);
    };

    pingPong = async (req: Request, res: Response, next: NextFunction) => {
        res.status(200).send('Pong')
            return 
    };
}
