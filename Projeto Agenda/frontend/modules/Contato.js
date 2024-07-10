const validator = require('validator');

export default class Contato {
    constructor(formClass){
        this.form = document.querySelector(formClass);
    }

    init(){
        this.events();
    }

    events(){
        if(!this.form) return;
        this.form.addEventListener('submit', e =>{
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const name = el.querySelector('input[name="registerInputName"]');
        const email = el.querySelector('input[name="registerInputEmail"]');
        const phoneNumber = el.querySelector('input[name="registerInputPhoneNumber"]');
        let error = false;

        // Validação
        // Nome 
        if(!name.value){
            const emailHelp = el.querySelector('[name="nameHelp"]');
            emailHelp.innerHTML = 'Nome é um campo obrigatório.';
            error = true;
        };
        // o e-mail precisa ser válido
        if (email.value && !validator.isEmail(email.value)) {
            const emailHelp = el.querySelector('[name="emailHelp"]');
            emailHelp.innerHTML = 'E-mail inválido! Por favor, insira um endereço de e-mail válido.';
            error = true;
        };
        // O contato precisa ter uma forma de contato
        if (!email.value && !phoneNumber.value){
            const phoneNumberHelp = el.querySelector('[name="phoneNumberHelp"]');
            phoneNumberHelp.innerHTML = 'Pelomenos uma fomar de contato precisa ser enviada.';
            error = true;
        }
            

        if (!error) el.submit();
    }
}