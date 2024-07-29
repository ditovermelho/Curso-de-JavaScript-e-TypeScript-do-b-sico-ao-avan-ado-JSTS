import { Router } from "express";
import fotoControllers from "../controllers/FotoControllers";

const router = new Router();

router.post('/', fotoControllers.store);

export default router;
