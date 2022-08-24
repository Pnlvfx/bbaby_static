import { Request, Response } from "express";
import coraline from "../database/coraline";
import { catchError } from "../hooks/catchError";
import fs from 'fs';
const fsPromises = fs.promises;

const videoCtrl = {
    sendVideo : async (req: Request, res: Response) => {
        try {
            const {range} = req.headers;
            if (!range) res.status(400).json("Requires range header");
            const path = await coraline.mkDir('/static/videos');
            const video = `${path}/checco.mp4`;
            const videoStat = await fsPromises.stat(video);
            const videoSize = videoStat.size;
            const CHUNK_SIZE = 10 ** 6; //1mb
            const start = Number(range?.replace(/\D/g, ""))
            const end = Math.min(start + CHUNK_SIZE, videoSize -1);
            const contentLength = end - start + 1;
            const headers = {
                "Content-range" : `bytes ${start}-${end}/${videoSize}`,
                "Accept-ranges": "bytes",
                "Content-length": contentLength,
                "Content-Type": "video/mp4",
                "Cache-Control": "public, max-age=1309600, s-max-age=86400, must-revalidate"
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