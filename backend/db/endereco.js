const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EnderecoSchema = new Schema({
    codigo: Number,
    logradouro: String,
    numero: Number,
    complemento: String,
    bairro: String,
    CEP: Number,
    cidade: String,
    UF: String
});

module.exports = mongoose.model('Endereco', EnderecoSchema, 'endereco');