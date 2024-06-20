import geradores from './geradores';

const senhaGerada = document.querySelector('.senha-gerada');
const qtd = document.querySelector('.qtd');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculass = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gera-senha');

function gera(){
    const senha = geradores(
        qtd.value,
        chkMaiusculas.checked,
        chkMinusculass.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    );

    return senha || 'Nada selecionado.';
}

export default () =>{
    const value = 'Sua senha: '
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = value + gera();
    });
};