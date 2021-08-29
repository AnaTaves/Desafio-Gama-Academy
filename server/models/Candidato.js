const mongoose = require('mongoose');

//configurando propriedades que devem estar no banco de dados
const Candidato = new mongoose.Schema({
    nome: { type: String, unique: false, required: true },
    cargo_pretendido: { type: String, unique: false, required: true },
    data_nascimento: { type: String, unique: false, required: true },
    estado_civil: { type: String, unique: false, required: false },
    gênero: { type: String, unique: false, required: false },
    cep: { type: String, unique: false, required: true },
    logradouro: { type: String, unique: false, required: true },
    número: { type: String, unique: false, required: true },
    bairro: { type: String, unique: false, required: true },
    cidade: { type: String, unique: false, required: true },
    estado: { type: String, unique: false, required: true },
    telefone_fixo_1: { type: String, unique: false, required: true },
    telefone_fixo_2: { type: String, unique: false, required: false },
    celular: { type: String, unique: false, required: true },
    email: { type: String, unique: true, required: true },
    rg: { type: String, unique: false, required: true },
    cpf: { type: String, unique: true, required: true },
    possui_veiculo: { type: Boolean, unique: false, required: false },
    tipo_habilitação: { type: String, unique: false, required: false }
}, {
    timestamps: true
})

module.exports = mongoose.model('Candidato', Candidato);
