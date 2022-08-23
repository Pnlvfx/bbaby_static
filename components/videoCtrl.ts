import { Request, Response } from "express";
import { catchError } from "../hooks/catchError";

const videoCtrl = {
    sendVideo : async (req: Request, res: Response) => {
        try {
            const {range} = req.headers;
            if (!range) res.status(400).json("Requires range header");
            const video = 
        } catch (err) {
            catchError(err, res);
        }
    },
}

export default videoCtrl;