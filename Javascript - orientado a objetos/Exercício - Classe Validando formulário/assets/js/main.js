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
    }

    checkFields() {
        let valid = true;

        for (let field of this.form.querySelectorAll('.valid')) {
            console.log(field);
        }
    }
}

const valida = new validForm();