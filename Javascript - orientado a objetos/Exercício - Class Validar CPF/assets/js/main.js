/* Exercício - Validando um CPF (Algoritmo):
705.484.450-52 070.987.720-03
*/

class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    valida() {
        const quantidadeDigitos = 11;

        if (typeof this.cpfLimpo === 'undefined') return false;
        if (this.cpfLimpo.length !== quantidadeDigitos) return false;
        if (this.isSequencia()) return false;

        const novoCPF = this.geraNovoCPF(quantidadeDigitos);

        return this.cpfLimpo === novoCPF;
    }

    isSequencia() {
        return this.cpfLimpo === this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length);
    }

    geraNovoCPF(quantidadeDigitos) {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos, quantidadeDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1, quantidadeDigitos);

        return cpfSemDigitos + digito1 + digito2;
    }

    static geraDigito(cpfSemDigitos, quantidadeDigitos) {
        const cpfArray = Array.from(cpfSemDigitos);
        let regressivo = cpfArray.length + 1;
        const total = cpfArray.reduce((ac, val) => {
            ac += (regressivo * Number(val));
            regressivo--;
            return ac;
        }, 0);

        const digito = quantidadeDigitos - (total % quantidadeDigitos);

        return digito > 9 ? '0' : String(digito);
    }

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
                const cpfDigitado = new ValidaCPF(this.input.value);
                if (cpfDigitado.valida()) {
                    this.resultado.innerHTML = 'O CPF digitado é válido.';
                } else {
                    this.resultado.innerHTML = 'O CPF digitado é inválido!';
                }
            } catch (e) {
                alert('CPF não informado!');
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
