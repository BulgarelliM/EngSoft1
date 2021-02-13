// init project
const express = require('express') // the library we will use to handle requests. import it here
const mongoose = require('mongoose'); // requisicao ao mongo
const endereco = require('./db/endereco');

const app = express() // instantiate express
const router = express.Router()

// mongo "mongodb+srv://cluster0.af72t.mongodb.net/DB-imoveis" --username <username>
const Endereco = require('./db/endereco');
const uri = 'mongodb+srv://admin-tp1:tp1-engsoftware@cluster0.af72t.mongodb.net/DB-imoveis?authSource=admin&replicaSet=atlas-9h1mtz-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'

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

/* 1) Método: Atribuir doc na collection (acessar em: POST http://localhost:8080/endereco */
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

   /* 2) Método: Selecionar Todos (acessar em: GET http://locahost:8080/endereco) */
   .get(function(req, res) {
       
    //Função para Selecionar Todos os 'enderecos' e verificar se há algum erro:
    Endereco.find(function(error, endereco) {
        if(error)
            res.send(error)
        res.send(endereco)
        })
    })

    // Rotas que irão terminar em '/endereco/:codigo' - (GET by codigo, PUT, DELETE)
router.route('/endereco/:codigo')

    /* 3) Método: Selecionar Por Id (acessar em: GET http://localhost:8080/endereco/:codigo) */
    .get(function(req, res) {

        //Função para Selecionar Por Id e verificar se há algum erro:
        Endereco.findById(req.params.codigo, function(error, endereco) {
            if(error) 
                res.send(error);

            res.json(endereco);
        });
    })

    /* 4) Método: Atualizar (acessar em: PUT http://localhost:8080/endereco/:codigo) */
    .put(function(req, res) {

        //Primeiro: Para atualizarmos, precisamos primeiro achar o endereco. Para isso, vamos selecionar por id:
        Endereco.findById(req.params.codigo, function(error, endereco) {
            if(error) 
                res.send(error);
            
            //Segundo: Diferente do Selecionar Por Id... a resposta será a atribuição do que encontramos na classe modelo:
            endereco.codigo = req.body.codigo
            endereco.logradouro = req.body.logradouro
            endereco.numero = req.body.numero
            endereco.complemento = req.body.complemento
            endereco.bairro = req.body.bairro
            endereco.CEP = req.body.CEP
            endereco.cidade = req.body.cidade
            endereco.UF = req.body.UF

            //Terceiro: Salvando alteração...
            endereco.save(function(error) {
                if(error)
                    res.send(error);

                res.send({ message: 'Endereço Atualizado!' });
            });
        });
    })

    /* 5) Método: Excluir (acessar em: http://localhost:8080/enderecos/:codigo) */
    .delete(function(req, res) {

        //Função para excluir os dados e também verificar se há algum erro no momento da exclusão:
        Endereco.remove({ codigo: req.params.codigo }, function(error) {
            if(error)
                res.send(error);

            res.send({ message:'Endereço excluído!'});
        });
    });


// listen for requests on port 8000
const port = 8000
const listener = app.listen(port, () => {
    console.log('Serviço executando na porta ' + listener.address().port);
})