const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    nome: String,
    email: String,
    login: String,
    senha: String,
    telefone: Number,
    admin: Boolean
});

module.exports = mongoose.model('Usuario', UsuarioSchema);