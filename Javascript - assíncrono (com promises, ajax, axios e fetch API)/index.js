/* Promises:
* Promises em JavaScript representam uma operação que ainda não foi concluída, mas que é esperada no futuro.
* Elas permitem escrever código assíncrono de forma mais legível, com métodos then(), catch() e finally().
* Uma Promise pode estar em um de três estados: pendente, resolvida ou rejeitada.

exemplo: 
- Callback:
function rand(min = 0, max = 0) {
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo, cb) {
    setTimeout(() => {
        console.log(msg);
        if(cb) cb();
    }, tempo);
}

esperaAi('Frase 1', rand(1, 3), function(){
    esperaAi('Frase 2', rand(1, 3), function(){
        esperaAi('Frase 3', rand(1, 3));
    });
});

- Promises:

function rand(min = 0, max = 3) {
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(new Error('ERRO'));
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Frase 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 2', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(222, rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch( e => {
        console.log('ERRO:', e)
    });

console.log('Isso aqui ira execulta primeiro');

*/

/* Métodos úteis para Promises:
* Promise.all() aguarda todas as promises serem resolvidas ou uma ser rejeitada.
* Promise.race() retorna a primeira promise que for resolvida ou rejeitada.
* Promise.resolve() e Promise.reject() criam promises já resolvidas ou rejeitadas, respectivamente.

const promises = [
    //'Primeiro valor',
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    esperaAi('Promise 4', rand(1, 5)),
    //esperaAi(100, rand(1, 5)),
    //'Outro valor'
];

Promise.all(promises)
    .then(valor => {
        console.log(valor);
    })
    .catch(e => {
        console.log(e);
    })

Promise.race(promises)
    .then(valor => {
        console.log(valor);
    })
    .catch(e => {
        console.log(e);
    })

function baixaPagina() {
    const emCache = false;

    if (emCache) {
        return Promise.resolve('Pagina em cache');
    } else {
        return esperaAi('Baixei a página', rand(3));
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log(e));

*/

/* Async / Await:
* Async/Await simplifica o trabalho com Promises, permitindo escrever código assíncrono que parece síncrono.
* 'async' antes de uma função a torna retornar uma Promise e 'await' pode ser usado para esperar uma Promise resolver.
* O uso de 'await' só é permitido dentro de funções 'async' e ajuda a evitar callbacks aninhados.

async function executa() {
    try {
        const fase1 = await esperaAi('Frase 1', rand());
        console.log(fase1);
        const fase2 = await esperaAi('Frase 2', rand());
        console.log(fase2);
        const fase3 = await esperaAi('Frase 3', rand());
        console.log(fase3);

        console.log('Terminamos na fase: ', fase3);
    } catch (e) {
        console.log(e);
    }
}

executa();

*/

/* XMLHttpRequest:
* XMLHttpRequest é um objeto do JavaScript que permite fazer requisições HTTP para trocar dados com um servidor.
* O método GET é usado para solicitar dados de um recurso especificado sem enviar dados adicionais.
* Exemplo: let xhr = new XMLHttpRequest(); xhr.open('GET', 'url'); xhr.send();

*/

/* Fetch API (GET):
* Fetch API fornece uma maneira mais poderosa e flexível de fazer requisições de rede, comparado ao XMLHttpRequest.
* Utiliza Promises, tornando o código mais limpo e fácil de ler e escrever quando se faz requisições GET.
- Exemplo: 
fetch('https://api.example.com/posts')
  .then(response => response.json())
  .then(data => console.log(data));

*/

/* Axios:
O Axios é uma biblioteca externa para fazer requisições HTTP.

- Vantagens:
Suporte a Promises.
Recursos adicionais (como timeout e interceptors).
Configurações globais.

-Limitações:
Requer uma dependência adicional.

- Exemplo:
axios.get('https://api.example.com/posts')
  .then(response => console.log(response.data));

*/