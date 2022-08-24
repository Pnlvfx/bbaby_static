import { Router } from "express";
import imageCtrl from "./imageCtrl";
import videoCtrl from "./videoCtrl";

const imageRouter = Router();

imageRouter.get('/', videoCtrl.sendVideo)

export default imageRouter;

