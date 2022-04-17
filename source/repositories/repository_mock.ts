import Music from '../models/music'


export class Repository {
   musics : Array<Music> = [
       new Music('af0019d5-19ca-4ca2-9b5a-4a15ef5b003d', 'Post Malone', 3)
   ];

   createMusic(music : Music) {
       this.musics.push(music)
   }

    getMusicByName(name : String) {
        return this.musics.find(music => music.name === name)
    }

   updateReview(music : Music) {
        const index = this.musics.findIndex(m => m.id === music.id)
        this.musics[index] = music     
        return this.musics[index] 
    }

    getAllMusics() {
        var sortedMusic = this.musics.sort((a, b) => (a.review < b.review ? 1 : -1));
        return this.musics;
    }
}

export default Repository;