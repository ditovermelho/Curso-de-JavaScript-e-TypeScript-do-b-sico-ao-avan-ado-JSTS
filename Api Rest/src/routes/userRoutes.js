import { Router } from "express";
import userControllers from "../controllers/UserControllers";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// Não deveria existir
router.get('/',  userControllers.index);
//router.get('/:id', userControllers.show);

router.post('/', userControllers.store);
router.put('/', loginRequired, userControllers.update);

// Essa opção pode ser conflitante dependendo do modelo de sistema
router.delete('/', loginRequired, userControllers.delete);

export default router;

/**
 * index -> Lista todos os usuários -> GET
 * store/create -> cria um novo usuário -> POST
 * delete -> apaga um usuário -> DELETE
 * show -> mostra um usuário -> GET
 * update -> atualiza um usuário -> PATCH ou PUT
 */
