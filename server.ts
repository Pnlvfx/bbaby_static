import express from 'express';
import compression from 'compression';
import imageRouter from './components/imageRouter';
import videoRouter from './components/videoRouter';

const app = express();
app.use(compression())


app.use('/video', videoRouter);
app.use('/b/api/images', imageRouter);

app.use('/b/gov/BBCnews', express.static('b/gov/BBCnews'))
app.use('/images', express.static('images'));


app.listen(8080);