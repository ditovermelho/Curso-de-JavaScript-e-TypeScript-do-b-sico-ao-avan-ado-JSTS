import validator from "validator";

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const email = el.querySelector('input[name="loginInputEmail"]');
        const password = el.querySelector('input[name="loginInputPassword"]');
        let error = false;

        // Validação
        // o e-mail precisa ser válido
        if (!validator.isEmail(email.value)) {
            const emailHelp = el.querySelector('[name="emailHelp"]');
            emailHelp.innerHTML += '<br>E-mail inválido! Por favor, insira um endereço de e-mail válido.';
            error = true;
        };

        // A senha precisa ter entre 3 e 50
        if (password.value.length < 3 || password.value.length > 50) {
            const passwordHelp = el.querySelector('[name="passwordHelp"]');
            passwordHelp.innerHTML += '<br>A senha deve ter entre 3 e 50 caracteres.';
            error = true;
        }

        if (!error) el.submit();
    }
}