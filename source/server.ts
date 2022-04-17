import { Controller } from './controllers/music';
import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';
import Repository from './repositories/repository_mock';

const router: Express = express();

router.use(morgan('dev'));
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});


const repo = new Repository();
const controller = new Controller(repo);

router.get('/musics', controller.getAllMusics);
router.put('/musics', controller.updateMusic);
router.post('/musics', controller.addMusic);

const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 6060;
httpServer.listen(PORT, () => console.log(`Rodando na porta: ${PORT}`));