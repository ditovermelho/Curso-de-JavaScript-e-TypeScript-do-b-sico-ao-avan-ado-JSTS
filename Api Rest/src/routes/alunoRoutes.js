import { Router } from "express";
import alunoControllers from "../controllers/AlunoControllers";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.get('/', alunoControllers.index);
router.get('/:id', alunoControllers.show);
router.post('/', loginRequired, alunoControllers.store);
router.put('/:id', loginRequired,  alunoControllers.update);
router.delete('/:id', loginRequired, alunoControllers.delete);

export default router;
