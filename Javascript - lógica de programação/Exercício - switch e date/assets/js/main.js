/*
forma 1:
function getDayWeek (diaSemana){
    let diaSemanaTexto;
    switch (diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-Feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-Feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-Feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-Feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-Feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemana = '';
            return diaSemanaTexto;
    }
}

function getMonthName (numeroMes){
    let nomeMes;
    switch (numeroMes){
        case 0:
            nomeMes = 'Janeiro';
            return nomeMes;
        case 1:
            nomeMes = 'Fevereiro';
            return nomeMes;
        case 2:
            nomeMes = 'Março';
            return nomeMes;
        case 3:
            nomeMes = 'Abril';
            return nomeMes;
        case 4:
            nomeMes = 'Maio';
            return nomeMes;
        case 5:
            nomeMes = 'Junho';
            return nomeMes;
        case 6:
            nomeMes = 'Julho';
            return nomeMes;
        case 7:
            nomeMes = 'Agosto';
            return nomeMes;
        case 8:
            nomeMes = 'Setembro';
            return nomeMes;
        case 9:
            nomeMes = 'Outubro';
            return nomeMes;
        case 10:
            nomeMes = 'Novembro';
            return nomeMes;
        case 11:
            nomeMes = 'Dezembro';
            return nomeMes;
        default:
            nomeMes = '';
            return nomeMes;
    }
}

function zeroAEsquerda (num){
    return num >= 10 ? num :`0${num}`;
}

function formatDate (data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = getMonthName(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    const diaSemana = getDayWeek(data.getDay());
    
    return `${diaSemana}, ${dia} de ${mes} de ${ano} <p>${hora}:${min}</p>`;
}

Forma 2 - sem switch:
const h1 = document.querySelector('.container h1');
const data = new Date()

function getDayWeek (diaSemana){
    const diaSemanaTexto = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 
    'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
    return diaSemanaTexto[diaSemana] || 'Erro!';
}

function getMonthName (numeroMes){
    const mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio','Junho', 'Julho',  
    'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return mes[numeroMes] || 'Erro!';
}

function zeroAEsquerda (num){
    return num >= 10 ? num :`0${num}`;
}

function formatDate (data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = getMonthName(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    const diaSemana = getDayWeek(data.getDay());
    
    return `${diaSemana}, ${dia} de ${mes} de ${ano} <p>${hora}:${min}</p>`;
}

h1.innerHTML = formatDate(data);
*/
// Fomar 3 - apenas com a função:
const h1 = document.querySelector('.container h1');
const data = new Date()
h1.innerHTML = data.toLocaleDateString('pt-br', {dateStyle: 'full', timeStyle: 'short'});