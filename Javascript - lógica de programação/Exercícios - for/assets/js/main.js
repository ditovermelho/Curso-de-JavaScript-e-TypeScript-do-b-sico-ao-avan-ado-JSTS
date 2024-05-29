const elementos = [
    { tag: 'p', texto: 'Qualquer texto que você quiser.' },
    { tag: 'div', texto: 'Qualquer texto que você quiser mesmo.' },
    { tag: 'section', texto: 'Qualquer texto que você quiser de verdade.' },
    { tag: 'footer', texto: 'Qualquer texto que você quiser é serio.' }
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i<elementos.length; i++) {
    let {tag, texto} = elementos[i];
    let tagCreat = document.createElement(tag);
    let textCreat = document.createTextNode(texto);

    tagCreat.appendChild(textCreat);
    div.appendChild(tagCreat);
}

container.appendChild(div);