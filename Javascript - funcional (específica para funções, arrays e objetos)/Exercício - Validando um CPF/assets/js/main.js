/* Exercício - Validando um CPF (Algoritmo):
705.484.450-52 070.987.720-03
*/

function ValidarCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function () {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidarCPF.prototype.valida = function () {
    const quantidadeDigitos = 11;
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== quantidadeDigitos) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial, quantidadeDigitos);
    const digito2 = this.criaDigito(cpfParcial + digito1, quantidadeDigitos);

    const novoCpf = cpfParcial + digito1 + digito2;

    return novoCpf === this.cpfLimpo;
};

ValidarCPF.prototype.isSequencia = function () {
    return this.cpfLimpo === this.cpfLimpo[0].repeat(this.cpfLimpo.length);
};

ValidarCPF.prototype.criaDigito = function (cpfParcial, quantidadeDigitos) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);

    const digito = quantidadeDigitos - (total % quantidadeDigitos);

    return digito > 9 ? '0' : String(digito);
}

function validacao() {
    return {
        input: document.querySelector('.input'),
        resultado: document.querySelector('.resultado'),

        start() {
            this.clickButton();
            this.pressEnter();
        },

        pressEnter() {
            this.input.addEventListener('keypress', e => {
                if (e.keyCode === 13) {
                    this.validarCPF();
                }
            });
        },

        clickButton() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if (el.classList.contains('button')) {
                    this.validarCPF();
                }
            });
        },

        validarCPF() {
            if (!this.input.value) return;
            try {
                const cpfDigitado = new ValidarCPF(this.input.value);
                if (cpfDigitado.valida()) {
                    this.resultado.innerHTML = 'O CPF digitado é válido';
                } else {
                    this.resultado.innerHTML = 'O CPF digitado é inválido';
                }
            } catch (e) {
                alert('CPF não informado');
                return;
            }

        },

        resultadoClear() {
            this.resultado = '';
        }
    };
}

const cpf = validacao();
cpf.start();
