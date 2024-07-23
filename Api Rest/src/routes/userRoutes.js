import { Router } from "express";
import userControllers from "../controllers/UserControllers";

const router = new Router();

router.post('/', userControllers.store);

export default router;

/**
 * index -> Lista todos os usuários -> GET
 * store/create -> cria um novo usuário -> POST
 * delete -> apaga um usuário -> DELETE
 * show -> mostra um usuário -> GET
 * update -> atualiza um usuário -> PATCH ou PUT
 */
