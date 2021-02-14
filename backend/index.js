// init project
const express = require('express') // the library we will use to handle requests. import it here
const app = express() // instantiate express
const mongoose = require('mongoose'); // requisicao ao mongo
const uri = 'mongodb+srv://admin-tp1:tp1-engsoftware@cluster0.af72t.mongodb.net/DB-imoveis?authSource=admin&replicaSet=atlas-9h1mtz-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'

try {
    mongoose.connect( uri, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
    console.log('Conectado'))   
    } catch (error) { 
    console.log('Não foi possível conectar') 
}

app.use(require('./api/endereco_req'))

// listen for requests on port 8000
const port = 8000
const listener = app.listen(port, () => {
    console.log('Serviço executando na porta ' + listener.address().port);
})