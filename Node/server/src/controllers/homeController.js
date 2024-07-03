/* 
req.session.usuario = { nome: 'Luiz', logado: true};
console.log('');
console.log('req.session.usuario');
console.log('');
req.flash('info', 'Olá mundo!');
req.flash('error', 'Error');
req.flash('success', 'Sucesso!');
console.log('');
console.log(req.flash('info'));
console.log('');
console.log('');
console.log(req.flash('error'));
console.log('');
console.log('');
console.log(req.flash('success'));
console.log('');
*/
exports.paginaInicial = (req, res) => {
    res.render('index');
    return;
}

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}