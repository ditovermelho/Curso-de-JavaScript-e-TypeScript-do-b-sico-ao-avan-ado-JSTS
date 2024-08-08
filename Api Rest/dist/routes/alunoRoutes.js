"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _AlunoControllers = require('../controllers/AlunoControllers'); var _AlunoControllers2 = _interopRequireDefault(_AlunoControllers);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.get('/', _AlunoControllers2.default.index);
router.get('/:id', _AlunoControllers2.default.show);
router.post('/', _loginRequired2.default, _AlunoControllers2.default.store);
router.put('/:id', _loginRequired2.default,  _AlunoControllers2.default.update);
router.delete('/:id', _loginRequired2.default, _AlunoControllers2.default.delete);

exports. default = router;
