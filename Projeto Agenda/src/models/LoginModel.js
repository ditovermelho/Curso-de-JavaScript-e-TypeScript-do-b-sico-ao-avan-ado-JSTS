const mongoose = require('mongoose');
const validator = require('validator');

const loginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    passwoed: { type: String, required: true },
});

const loginModel = mongoose.model('login', loginSchema);

class login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async register() {
        this.validete();
        if (this.errorsS) return;
        try {
            this.user = await loginModel.create(this.body);
        } catch (e) {
            console.log(e);
        }

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
            email: this.body.registerInputEmail,
            passwoed: this.body.registerInputPassword1
        }
    }
}

module.exports = login;