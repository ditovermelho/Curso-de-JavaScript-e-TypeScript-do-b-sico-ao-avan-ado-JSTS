const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const loginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    passwoed: { type: String, required: true },
});

const loginModel = mongoose.model('login', loginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async login(){
        this.validete();
        if (this.errors.length > 0) return;

        this.user = await loginModel.findOne({email: this.body.email});

        if (!this.user) {
            this.errors.push('Usuário não existe.');
            return;
        }

        if(!bcryptjs.compareSync(this.body.passwoed, this.user.passwoed)){
            this.errors.push('Senha inválida.');
            this.user = null;
            return;
        }
    }

    async register() {
        this.validete();
        if (this.errors.length > 0) return;

        await this.userExists();

        if (this.errors.length > 0) return;

        const salt = bcryptjs.genSaltSync();
        this.body.passwoed = bcryptjs.hashSync(this.body.passwoed, salt);

        this.user = await loginModel.create(this.body);

    }

    async userExists(){
        this.user = await loginModel.findOne({email: this.body.email});

        if (this.user) this.errors.push('Usuário já existe.');
    }

    validete() {
        this.cleanUp();
        // Validação
        // o e-mail precisa ser válido
        if (!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido!');

        // A senha precisa ter entre 3 e 50
        if (this.body.passwoed.length < 3 || this.body.passwoed.length > 50) {
            this.errors.push('A senha precisa ter entre 3 e 50 caracteres.');
        }
    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = {
            email: this.body.registerInputEmail || this.body.loginInputEmail,
            passwoed: this.body.registerInputPassword1 || this.body.loginInputPassword
        }
    }
}

module.exports = Login;