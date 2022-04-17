class Music {
    id: String;
    name: String;
    review: Number;

    constructor(id : String, name : String, review : Number) {
        this.id = id;
        this.name = name;
        this.review = review ?? 0
    }
}

export default Music