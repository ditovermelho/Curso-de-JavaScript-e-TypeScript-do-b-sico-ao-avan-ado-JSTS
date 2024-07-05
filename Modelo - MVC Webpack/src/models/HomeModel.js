const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    decricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema);

class Home{
    constructor(body){
        this.body = body;
    }
}

module.exports = Home;