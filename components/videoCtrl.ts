import { Request, Response } from "express";
import coraline from "../database/coraline";
import { catchError } from "../hooks/catchError";
import fs from 'fs';
const fsPromises = fs.promises;

const videoCtrl = {
    sendVideo : async (req: Request, res: Response) => {
        try {
            const {range} = req.headers;
            console.log(range);
            if (!range) res.status(400).json("Requires range header");
            const path = await coraline.mkDir('/static/videos');
            console.log(path);
            const video = `${path}/checco.mp4`;
            const videoSize = (await fsPromises.stat(video)).size;
            console.log(videoSize);
            const CHUNK_SIZE = 10 ** 6;
            const start = Number(range?.replace(/\D/g, ""))
            const end = Math.min(start + CHUNK_SIZE, videoSize -1);
            const contentLength = end - start + 1;
            const headers = {
                "Content-range" : `bytes ${start}-${end}/${videoSize}`,
                "Accept-ranges": "bytes",
                "Content-length": contentLength,
                "Content-Type": "video/mp4"
            };
            res.writeHead(206, headers);
            const videoStream = fs.createReadStream(video, { start, end });
            videoStream.pipe(res);
        } catch (err) {
            catchError(err, res);
        }
    },
}

export default videoCtrl;