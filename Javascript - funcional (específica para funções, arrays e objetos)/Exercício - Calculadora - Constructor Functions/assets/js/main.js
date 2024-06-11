function Calculadora() {
    this.display = document.querySelector('.display');

    this.start = () => {
        this.captureClick();
        this.captureEnter();
    };

    this.captureEnter = () =>{
        document.addEventListener('keypress', e => {
            if(e.keyCode !== 13) return;

            this.calculate();
        });
    }

    this.captureClick = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;

            if (el.classList.contains('btn-num')) this.addValuedisplay(el);

            if (el.classList.contains('btn-clear')) this.btnClear();

            if (el.classList.contains('btn-del')) this.btnDelet();

            if (el.classList.contains('btn-eq')) this.calculate();
        });
    };

    this.addValuedisplay = (el) => {
        this.display.value += el.innerText;
        this.display.focus();
    };

    this.btnClear = () => this.display.value = '';

    this.btnDelet = () => this.display.value = this.display.value.slice(0, -1);

    this.calculate = () => {
        try {
            const conta = eval(this.display.value);

            if(!conta){
                alert('Conta inválida');
                return;
            }

            this.display.value = conta;
           }catch(e){
            alert('Conta inválida');
            return;
           }
    };

}

const calculadora = new Calculadora();
calculadora.start();