"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Music {
    constructor(id, name, review) {
        this.id = id;
        this.name = name;
        this.review = review !== null && review !== void 0 ? review : 0;
    }
}
exports.default = Music;
