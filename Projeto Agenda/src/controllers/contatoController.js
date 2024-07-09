const Contato = require('../models/ContatoModel');
exports.index = (req, res) => {
    res.render('contato', {contato: {}});
};

exports.register = async (req, res) => {
    try {
        const contato = new Contato(req.body);
        await contato.register();

        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            return req.session.save(() => res.redirect('back'));
        }

        req.flash('success', 'Contato registrado com sucesso.');
        return req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
    } catch (e) {
        console.log(e);
        return res.render('404');
    }

};

exports.editIndex = async (req, res) => {
    try {
        if (!req.params.id) return res.render('404');

        const contato = await Contato.searchId(req.params.id);

        if(!contato) return res.render('404');

        return res.render('contato', { contato });
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
};

exports.edit = async (req, res) => {
    try {
        if (!req.params.id) return res.render('404');

        const contato = new Contato(req.body);
        
        await contato.edit(req.params.id);

        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            return req.session.save(() => res.redirect('back'));
        }

        req.flash('success', 'Contato editado com sucesso.');
        return req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
};

exports.delete = async (req, res) => {
    try {
        if (!req.params.id) return res.render('404');

        const contato = await Contato.delete(req.params.id);

        if(!contato) return res.render('404');
        
        req.flash('success', 'Contato apagado com sucesso.');
        return req.session.save(() => res.redirect('back'));
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
};