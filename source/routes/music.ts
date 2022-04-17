import express from 'express';
import controller from '../controllers/music';
const router = express.Router();

router.get('/musics', controller.getAllMusics);
router.put('/musics/:id', controller.updateMusic);
router.post('/musics', controller.addMusic);

export = router;