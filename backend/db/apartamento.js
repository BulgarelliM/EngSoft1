const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ApartamentoSchema = new Schema({
    num_quartos: Number,
    num_suites: Number,
    num_sala_estar: Number,
    num_vagas_garagem: Number,
    area: Number,
    armario_embutido: Boolean,
    condominio: Number,
    num_sala_jantar: Number,
    andar: Number,
    portaria_24: Boolean,
    login_proprietario: String,
    login_inquilino: String,
    codigo: Number
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

module.exports = mongoose.model('Apartamento', ApartamentoSchema, 'apartamento');