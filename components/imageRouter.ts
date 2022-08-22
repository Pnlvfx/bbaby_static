import { Router } from "express";
import imageCtrl from "./imageCtrl";

const imageRouter = Router();

imageRouter.get('/', imageCtrl.downloadFromUrl)

export default imageRouter;

