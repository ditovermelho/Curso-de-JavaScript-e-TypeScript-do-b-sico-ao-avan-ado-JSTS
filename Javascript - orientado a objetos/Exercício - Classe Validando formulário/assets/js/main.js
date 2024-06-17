/* Formulário de Cadastro
    Nenhum campo pode estar vazio.
    Usuário só podera conter letras e/ou números.
    Usuário deverá ter entre 3 e 12 caracteres.
    Senha precissa ter entre 6 e 12 caracteres.
*/

class validForm {
    constructor() {
        this.form = document.querySelector('.registration-form');
        this.eventos();
    }

    eventos() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const validFields = this.checkFields();
        const validPassword = this.checkPassword();

        if (validFields && validPassword){
            alert('Formulário enviado.');
            this.form.submit();
        }
    }

    checkFields() {
        let valid = true;

        for (let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let field of this.form.querySelectorAll('.valid')) {
            if (!field.value) {
                const label = field.previousElementSibling.innerHTML;
                this.createErro(field, `Campo ${label} não pode estar em branco.`);
                valid = false;
            }

            if (field.classList.contains('cpf')) {
                if (!this.validCPF(field)) valid = false;
            }

            if (field.classList.contains('user')){
                if (!this.validUser(field)) valid = false;
            }
        }

        return valid;
    }

    createErro(field, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div);
    }

    validCPF(field) {
        try {
            const cpfDigitado = new ValidaCPF(field.value);

            if (!cpfDigitado.valida()) {
                this.createErro(field, 'O CPF digitado é inválido!');
                return false;
            }

            return true;

        } catch (e) {
            alert('CPF não informado!');
            return false;
        }

    }

    validUser(field) {
        const user = field.value;
        let valid = true;

        if (user.length > 12 || user.length < 3) {
            this.createErro(field, 'Usuário precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }

        if (!user.match(/[a-zA-Z0-9]/g)) {
            this.createErro(field, 'Usuário precisa ter letras e/ou números.');
            valid = false;
        }

        return valid;
    }

    checkPassword(){
        let valid = true;

        const password = this.form.querySelector('.user-password');
        const repitPassword = this.form.querySelector('.repit-password');

        if (password.value !== repitPassword.value){
            this.createErro(password, 'Campos senha e repetir senha precisam ser iguais');
            this.createErro(repitPassword, 'Campos senha e repetir senha precisam ser iguais');
            valid = false;
        }

        if (password.value.length > 12 || password.value.length < 6) {
            this.createErro(password, 'Senha precissa ter entre 6 e 12 caracteres.');
            valid = false;
        }

        return valid;
    }
}

const valida = new validForm();