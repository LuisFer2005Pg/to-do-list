//inportar o mongoose
const mongoose = require('mongoose')

//criar a estrutura para o armazenamento das informações do usuario
const modelo = mongoose.Schema({
    nome:String,
    email:String,
    senha:String
})

//gravar a estrutura na model usuarios
const usuarios = mongoose.model('usuarios',modelo)

//exportar os dados para o acesso externo
module.exports = usuarios