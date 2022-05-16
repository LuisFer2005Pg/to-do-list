//importar o mongoose
const mongoose = require('mongoose')
//script de conexao
const conn = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://userLR:user1234@cluster0.tcga7.mongodb.net/dblr')
}

//exportar as informaçoes para acesso externo
module.exports = conn