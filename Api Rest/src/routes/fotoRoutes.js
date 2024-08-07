import { Router } from "express";
import loginRequired from "../middlewares/loginRequired";
import fotoControllers from "../controllers/FotoControllers";

const router = new Router();

router.post('/', loginRequired, fotoControllers.store);

export default router;
