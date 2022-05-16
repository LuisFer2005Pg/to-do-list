//inportar o mongoose
const mongoose = require('mongoose')

//criar a estrutura para o armazenamento das informações das atividades
const modelo = mongoose.Schema({
    data:Date,
    tipo:String,
    entrega:String,
    disciplina:String,
    instrucoes:String,
    usuario:String
})

//gravar a estrutura na model atividades
const usuarios = mongoose.model('atividades',modelo)

//exportar os dados para o acesso externo
module.exports = atividades