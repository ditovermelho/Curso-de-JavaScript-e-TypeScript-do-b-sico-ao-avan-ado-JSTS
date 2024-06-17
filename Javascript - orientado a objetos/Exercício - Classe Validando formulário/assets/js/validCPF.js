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