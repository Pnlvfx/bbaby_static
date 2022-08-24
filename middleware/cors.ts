import type {Response, NextFunction, Request} from 'express';
import { catchError } from '../hooks/catchError';

interface CorsOptions {
    options?: Object
}

const cors = () => {
        const headers = {
            "Access-Control-Allow-Credentials": 'true',
            "Access-Control-Allow-Origin": 'http://localhost:1000'
        };
        return function cors (req: Request, res: Response, next: NextFunction) {
            res.writeHead(200, headers);
            next()
        }
}

export default cors;