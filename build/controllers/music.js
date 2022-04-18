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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const music_1 = __importDefault(require("../models/music"));
const { v4: uuidv4 } = require('uuid');
class Controller {
    constructor(repository) {
        this.getAllMusics = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            return res.status(200).json(this.repository.getAllMusics());
        });
        this.updateMusic = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            if (req.body.review > 5) {
                res.status(400).send('Valor inválido, maior do que 5.');
                return;
            }
            const musicToUpdate = this.repository.getMusicByName(req.body.name);
            musicToUpdate.review = req.body.review;
            this.repository.updateReview(musicToUpdate);
            res.status(200).json(musicToUpdate);
        });
        this.addMusic = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const music = new music_1.default(uuidv4(), req.body.name, 0);
            this.repository.createMusic(music);
            res.status(200).json(music);
        });
        this.pingPong = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200).send('Pong');
            return;
        });
        this.repository = repository;
    }
}
exports.Controller = Controller;
