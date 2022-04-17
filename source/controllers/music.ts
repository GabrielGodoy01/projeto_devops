import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Music {
    id: Number;
    name: String;
    review: Number;
}

const getAllMusics = async (req: Request, res: Response, next: NextFunction) => {
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/musics`);
    let musics: [Music] = result.data;
    return res.status(200).json({
        message: musics
    });
};

const updateMusic = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    let review: string = req.body.body ?? null;
    let response: AxiosResponse = await axios.put(`https://jsonplaceholder.typicode.com/musics/${id}`, {
        ...(review && { review })
    });
    return res.status(200).json({
        message: response.data
    });
};

const addMusic = async (req: Request, res: Response, next: NextFunction) => {
    let name: string = req.body.title;
    let response: AxiosResponse = await axios.post(`https://jsonplaceholder.typicode.com/musics`, {
        name,
    });
    return res.status(200).json({
        message: response.data
    });
};

export default { getAllMusics, updateMusic, addMusic };