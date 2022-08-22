import express from 'express';
import compression from 'compression';
import imageRouter from './components/imageRouter';

const app = express();
app.use(compression())
const base_path = '/b'
app.use('/b/api/images', imageRouter)

app.use('/b/gov/BBCnews', express.static('b/gov/BBCnews'))
app.use('/images', express.static('images'));


app.listen(8080);