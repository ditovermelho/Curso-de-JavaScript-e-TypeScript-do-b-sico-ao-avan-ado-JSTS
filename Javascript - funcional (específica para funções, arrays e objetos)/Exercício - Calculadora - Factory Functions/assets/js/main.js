function criaCalculadora(){
    return {
        display: document.querySelector('.display'),

        start(){
            this.clickButton();
            this.pressEnter();
        },

        pressEnter(){
            this.display.addEventListener('keypress', e =>{
                if(e.keyCode === 13) this.calcular();
            });
        },

        clickButton(){
            document.addEventListener('click', (e) => {
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.displayUpdate(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.btnClear();
                }

                if(el.classList.contains('btn-del')){
                    this.btnDelet();
                }

                if(el.classList.contains('btn-eq')){
                    this.calcular();
                }
            });
        },

        displayUpdate(valor){
            this.display.value += valor;
            this.display.focus();
        },

        btnClear(){
            this.display.value = '';
        },

        btnDelet(){
            this.display.value = this.display.value.slice(0, -1);
        },

        calcular(operador, acumulador = 0, ...numeros) {
            /*
            for (let numero of numeros) {
                if (operador === '+') acumulador += numero;
                if (operador === '-') acumulador -= numero;
                if (operador === '/') acumulador /= numero;
                if (operador === '*') acumulador *= numero;
            }
            this.display.value = acumulador;
            */
           let conta = this.display.value;

           try {
            conta = eval(conta);

            if(!conta){
                alert('Conta inválida');
                return;
            }

            this.display.value = conta;
           }catch(e){
            alert('Conta inválida');
            return;
           }
        }
    };
}

const calculadora = criaCalculadora();
calculadora.start();