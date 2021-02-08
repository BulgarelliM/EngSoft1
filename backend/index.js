// init project
const express = require('express') // the library we will use to handle requests. import it here
const mongoose = require('mongoose') // requisicao ao mongo

const app = express() // instantiate express
const router = express.Router()

const Endereco = require('./db/endereco');
const dbName = 'DB-imoveis'
const uri = 'mongodb+srv://admin-tp1:tp1-engsoftware@cluster0.af72t.mongodb.net/test?authSource=admin&replicaSet=atlas-9h1mtz-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'

app.use(require("cors")()) // allow Cross-domain requests 
app.use(require('body-parser').urlencoded({ extended: true }))
app.use(require('body-parser').json()) // When someone sends something to the server, we can recieve it in JSON format
app.use('/', router)

try {
    mongoose.connect( uri, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
    console.log('Conectado'))   
    } catch (error) { 
    console.log('Não foi possível conectar') 
}

router.use(function(req, res, next) {
    console.log('Algo está acontecendo aqui........')
    next()
})

/* Rota de Teste para sabermos se tudo está realmente funcionando (acessar através: GET: http://localhost:8000/) */
router.get('/', function(req, res) {
    res.send({ message: 'Seja Bem-Vindo a nossa API' })
});

// Rotas que irão terminar em '/endereco' - (servem tanto para: GET All & POST)
router.route(`/endereco`)

    /* 1) Método: Criar document na collection (acessar em: POST http://localhost:8080/endereco */
    .post(function(req, res) {
        const endereco = new Endereco()
        //aqui setamos os campos do endereco (que virá do request)
        endereco.codigo = req.body.codigo
        endereco.logradouro = req.body.logradouro
        endereco.numero = req.body.numero
        endereco.complemento = req.body.complemento
        endereco.bairro = req.body.bairro
        endereco.CEP = req.body.CEP
        endereco.cidade = req.body.cidade
        endereco.UF = req.body.UF

        endereco.save(function(error) {
            if(error)
                res.send(error)          
            res.send({ message: 'Endereço criado!' })
        });
    })

   /* 2) Método: Selecionar Todos (acessar em: GET http://locahost:8080/api/endereco) */
   .get(function(req, res) {

    //Função para Selecionar Todos os 'enderecos' e verificar se há algum erro:
    Endereco.find(function(err, endereco) {
        if(err)
            res.send(err)
        res.send(endereco)
    })
})


// listen for requests on port 8000
const port = 8000
const listener = app.listen(port, () => {
    console.log('Serviço executando na porta ' + listener.address().port);
});