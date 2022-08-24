import { Router } from "express";
import videoCtrl from "./videoCtrl";

const videoRouter = Router();

videoRouter.get('/videos', videoCtrl.sendVideo)

export default videoRouter;
