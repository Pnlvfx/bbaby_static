import type {Request, Response} from 'express';
import { catchError } from '../hooks/catchError';
import probe from 'probe-image-size';
import getBBCnews from '../lib/mongodb';

const imageCtrl = {
    downloadFromUrl : async (req:Request, res: Response) => {
        try {
            // const {image} = req.query;
            // if (!image) return res.status(400).json({msg: 'This API endpoint require at least one url to download the image from.'});
            const news = await getBBCnews();
            
            return
            // const result = await probe(image.toString())
            // console.log(result.height, result.width);
        } catch (err) {
            catchError(err, res);
        }
    }
}

export default imageCtrl;