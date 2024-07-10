import "./assets/css/style.css";
import "core-js/stable";
import "regenerator-runtime/runtime";
import Register from "./modules/Register";
import Login from "./modules/Login";
import Contato from "./modules/Contato";

const login = new Login('.form-login');
const register = new Register('.form-register');
const contato = new Contato('.form-contato');
login.init();
register.init();
contato.init();