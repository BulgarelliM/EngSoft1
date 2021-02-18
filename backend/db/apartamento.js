const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ApartamentoSchema = new Schema({
    valor_aluguel: Number,
    num_quartos: Number,
    num_suites: Number,
    num_sala_estar: Number,
    num_vagas_garagem: Number,
    area: Number,
    armario_embutido: Boolean,
    condominio: Number,
    descricao: String,
    num_sala_jantar: Number,
    andar: Number,
    portaria_24: Boolean,
    login_proprietario: String,
    codigo: Number,
    municipio: String,
    bairro: String
    /*     foto: [{
            $binary: "",
            $type: "0"
        },  {
            $binary: "",
            $type: "0"
        },  {
            $binary: "",
            $type: "0"
        },  {
            $binary: "",
            $type: "0"
        },  {
            $binary: "",
            $type: "0"
            }] */
})

module.exports = mongoose.model('Apartamento', ApartamentoSchema, 'apartamento')