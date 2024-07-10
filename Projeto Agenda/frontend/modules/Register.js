const validator = require('validator');

export default class Register {
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
        const email = el.querySelector('input[name="registerInputEmail"]');
        const password1 = el.querySelector('input[name="registerInputPassword1"]');
        const password2 = el.querySelector('input[name="registerInputPassword2"]');
        let error = false;

        // Validação
        // o e-mail precisa ser válido
        // o e-mail precisa ser válido
        if (!validator.isEmail(email.value)) {
            const emailHelp = el.querySelector('[name="emailHelp"]');
            emailHelp.innerHTML += '<br>E-mail inválido! Por favor, insira um endereço de e-mail válido.';
            error = true;
        };

        // A senha precisa ter entre 3 e 50
        if (password1.value.length < 3 || password1.value.length > 50) {
            const passwordHelp = el.querySelector('[name="passwordHelp1"]');
            passwordHelp.innerHTML += '<br>A senha deve ter entre 3 e 50 caracteres.';
            error = true;
        }

        if (password2.value.length < 3 || password2.value.length > 50) {
            const passwordHelp = el.querySelector('[name="passwordHelp2"]');
            passwordHelp.innerHTML += '<br>A senha deve ter entre 3 e 50 caracteres.';
            error = true;
        }
        
        // As senhas precisam ser iguais
        if(password1.value !== password2.value){
            const passwordHelp = el.querySelector('[name="passwordHelp2"]');
            passwordHelp.innerHTML += '<br>As senhas precisam ser iguais.';
            error = true;
        }

        if (!error) el.submit();
    }
}