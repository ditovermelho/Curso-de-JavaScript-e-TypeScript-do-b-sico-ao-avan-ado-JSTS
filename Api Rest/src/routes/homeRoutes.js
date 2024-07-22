import { Router } from "express";
import homeControllers from "../controllers/HomeControllers";

const router = new Router();

router.get('/', homeControllers.index);

export default router;
