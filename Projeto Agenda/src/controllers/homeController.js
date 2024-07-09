const Contato = require('../models/ContatoModel');

exports.index = async (req, res) => {
    const contatos = await Contato.searchContato();
    res.render('index', { contatos });
};
