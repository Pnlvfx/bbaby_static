import express from 'express';
import compression from 'compression';
import imageRouter from './components/imageRouter';
import videoRouter from './components/videoRouter';
import cors from './middleware/cors';

const app = express();
app.use(compression());

const base_path = '/home/simone/simone/coraline';

app.get('/videos', videoRouter);
//app.get('/images', imageRouter);

//app.use('/BBCnews', express.static(`${base_path}/static/videos`));
//app.use('/images', express.static(`${base_path}/static/images`));
//app.use('/videos', videoRouter, express.static(`${base_path}/static/videos`));


app.listen(8080);

