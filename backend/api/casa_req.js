const express = require('express')
const app = express() // instantiate express
const router = express.Router()
const Casa = require('../db/casa')

app.use('/', router)

router.use(function (req, res, next) {
    next()
})

/* Rota de Teste para sabermos se tudo está realmente funcionando (acessar através: GET: http://localhost:8000/) */
router.get('/', function (req, res) {
    res.send({ message: 'Seja Bem-Vindo a nossa API' })
});

// Rotas que irão terminar em '/casa' - (servem tanto para: GET All & POST)
router.route(`/casa`)

    /* 1) Método: Atribuir doc na collection (acessar em: POST http://localhost:8000/casa */
    .post(function (req, res) {
        console.log(req.body)
        const casa = new Casa({
            num_quartos: req.body.num_quartos,
            num_suites: req.body.num_suites,
            num_sala_estar: req.body.num_sala_estar,
            num_vagas_garagem: req.body.num_vagas_garagem,
            area: req.body.area,
            armario_embutido: req.body.armario_embutido,
            descricao: req.body.descricao,
            login_proprietario: req.body.login_proprietario,
            login_inquilino: req.body.login_inquilino,
            codigo: req.body.codigo
        })

        casa.save(function (error) {
            if (error)
                res.send(error)
            res.send({ message: 'Casa criado!' })
        });
    })

    /* 2) Método: Selecionar Todos (acessar em: GET http://locahost:8000/casa) */
    .get(function (req, res) {

        //Função para Selecionar Todos os 'casas' e verificar se há algum erro:
        Casa.find(function (error, casa) {
            if (error)
                res.send(error)
            res.send(casa)
        })
    })

// Rotas que irão terminar em '/casa/:codigo' - (GET by codigo, PUT, DELETE)
router.route('/casa/:codigo')

    /* 3) Método: Selecionar Por Id (acessar em: GET http://localhost:8080/casa/:codigo) */
    .get(function (req, res) {

        //Função para Selecionar Por Id e verificar se há algum erro:
        Casa.find({ codigo: req.params.codigo }, function (error, casa) {
            if (error)
                res.send(error)

            res.send(casa)
        })
    })

    /* 4) Método: Atualizar (acessar em: PUT http://localhost:8080/casa/:codigo) */
    .put(function (req, res) {

        //Primeiro: Para atualizarmos, precisamos primeiro achar o casa. Para isso, vamos selecionar por id:
        Casa.find({ codigo: req.params.codigo }, function (error, casa) {
            if (error)
                res.send(error)

            //Segundo: Diferente do Selecionar Por Id... a resposta será a atribuição do que encontramos na classe modelo:
            casa.num_quartos = req.body.num_quartos
            casa.num_suites = req.body.num_suites
            casa.num_sala_estar = req.body.num_sala_estar
            casa.num_vagas_garagem = req.body.num_vagas_garagem
            casa.area = req.body.area
            casa.armario_embutido = req.body.armario_embutido
            casa.descricao = req.body.descricao
            casa.login_proprietario = req.body.login_proprietario
            casa.login_inquilino = req.body.login_inquilino
            casa.codigo = req.body.codigo
            //Terceiro: Salvando alteração...
            casa.save(function (error) {
                if (error)
                    res.send(error)

                res.send({ message: 'Casa Atualizada!' });
            })
        })
    })

    /* 5) Método: Excluir (acessar em: http://localhost:8080/casas/:codigo) */
    .delete(function (req, res) {

        //Função para excluir os dados e também verificar se há algum erro no momento da exclusão:
        Casa.remove({ codigo: req.params.codigo }, function (error) {
            if (error)
                res.send(error)

            res.send({ message: 'Casa excluído!' })
        })
    })

module.exports = router