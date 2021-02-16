const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AgendaSchema = new Schema({
    data: Date,
    codigo_imovel: String,
    login_usuario: String
})

module.exports = mongoose.model('Agenda', ApartamentoSchema, 'agenda');