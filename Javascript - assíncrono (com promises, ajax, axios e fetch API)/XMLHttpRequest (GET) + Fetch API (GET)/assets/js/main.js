/* XMLHttpRequest:
* XMLHttpRequest é um objeto do JavaScript que permite fazer requisições HTTP para trocar dados com um servidor.
* O método GET é usado para solicitar dados de um recurso especificado sem enviar dados adicionais.
* Exemplo: let xhr = new XMLHttpRequest(); xhr.open('GET', 'url'); xhr.send();

- Exemplo:
const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            obj.success(xhr.responseText);
        } else {
            obj.error({
                code: xhr.status,
                msg: xhr.statusText
            });
        }
    });
}

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

function carregaPagina(el) {
    const href = el.getAttribute('href');

    const objConfig = {
        method: 'GET',
        url: href,
        success(response) {
            carregaResultado(response);
        },
        error(errorText) {
            console.log(errorText);
        }
    }

    request(objConfig);

}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

- Exemplo Promise:
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject({
                    code: xhr.status,
                    msg: xhr.statusText
                });
            }
        });
    });
}

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    try {
        const href = el.getAttribute('href');

        const response = await request({
            method: 'GET',
            url: href
        });

        carregaResultado(response);
    } catch (e) {
        console.log(e);
    };

}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

Fetch API (GET):
* Fetch API fornece uma maneira mais poderosa e flexível de fazer requisições de rede, comparado ao XMLHttpRequest.
* Utiliza Promises, tornando o código mais limpo e fácil de ler e escrever quando se faz requisições GET.
* Exemplo: fetch('url').then(response => response.json()).then(data => console.log(data));

- Exemplo Fetch API:

*/

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    const href = el.getAttribute('href');
    const resposta = await fetch(href);
    try{
        if (resposta.status >= 200 && resposta.status < 300) {
            const html = await resposta.text();
            carregaResultado(html);
        } else {
            throw new Error();
        }
        
    }catch (e) {
        console.error(e);
    };

}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

