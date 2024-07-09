const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: false, default: '' },
    phoneNumber: { type: String, required: false, default: '' },
    createIn: { type: Date, default: Date.now },
});

const contatoModel = mongoose.model('Contato', ContatoSchema);

class Contato {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.contato = null;
    }

    async register() {
        this.validete();
        if (this.errors.length > 0) return;

        this.contato = await contatoModel.create(this.body);

    }

    async edit(id){
        if (typeof id !== 'string') return;

        this.validete();

        if (this.errors.length > 0) return;
        
        this.contato = await contatoModel.findByIdAndUpdate(id, this.body, {new: true});
    }

    validete() {
        this.cleanUp();
        // Validação
        // Nome 
        if (!this.body.name) this.errors.push('Nome é um campo obrigatório.');
        // o e-mail precisa ser válido
        if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido!');
        // O contato precisa ter uma forma de contato
        if (!this.body.email && !this.body.phoneNumber)
            this.errors.push('Pelomenos uma fomar de contato precisa ser enviada.');
    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = {
            name: this.body.registerInputName,
            email: this.body.registerInputEmail,
            phoneNumber: this.body.registerInputPhoneNumber,
        }
    }

    static async searchId(id) {
        if (typeof id !== 'string') return;

        const searchUser = await contatoModel.findById(id);

        return searchUser;
    } 
    
    static async searchContato(){
        const contatos = await contatoModel.find().sort({createIn: -1});

        return contatos;
    }

    static async delete(id){
        if (typeof id !== 'string') return;

        const contato = await contatoModel.findOneAndDelete({_id: id});

        return contato;
    }
}

module.exports = Contato;