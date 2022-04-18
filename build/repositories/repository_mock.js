"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
const music_1 = __importDefault(require("../models/music"));
class Repository {
    constructor() {
        this.musics = [
            new music_1.default('af0019d5-19ca-4ca2-9b5a-4a15ef5b003d', 'Post Malone', 3)
        ];
    }
    createMusic(music) {
        this.musics.push(music);
    }
    getMusicByName(name) {
        return this.musics.find(music => music.name === name);
    }
    updateReview(music) {
        const index = this.musics.findIndex(m => m.id === music.id);
        this.musics[index] = music;
        return this.musics[index];
    }
    getAllMusics() {
        var sortedMusic = this.musics.sort((a, b) => (a.review < b.review ? 1 : -1));
        return this.musics;
    }
}
exports.Repository = Repository;
exports.default = Repository;
