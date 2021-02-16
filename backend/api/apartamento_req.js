const express = require('express')
const app = express() // instantiate express
const router = express.Router()
const Apartamento = require('../db/apartamento')

app.use('/', router)

router.use(function (req, res, next) {
    next()
})

/* Rota de Teste para sabermos se tudo está realmente funcionando (acessar através: GET: http://localhost:8000/) */
router.get('/', function (req, res) {
    res.send({ message: 'Seja Bem-Vindo a nossa API' })
});

// Rotas que irão terminar em '/apartamento' - (servem tanto para: GET All & POST)
router.route(`/apartamento`)

    /* 1) Método: Atribuir doc na collection (acessar em: POST http://localhost:8000/apartamento */
    .post(function (req, res) {
        console.log(req.body)
        const apartamento = new Apartamento({
            num_quartos: req.body.num_quartos,
            num_suites: req.body.num_suites,
            num_sala_estar: req.body.num_sala_estar,
            num_vagas_garagem: req.body.num_vagas_garagem,
            area: req.body.area,
            armario_embutido: req.body.armario_embutido,
            condominio: req.body.condominio,
            num_sala_jantar: req.body.num_sala_jantar,
            andar: req.body.andar,
            portaria_24: req.body.portaria_24,
            login_proprietario: req.body.login_proprietario,
            login_inquilino: req.body.login_inquilino,
            codigo: req.body.codigo
        })

        apartamento.save(function (error) {
            if (error)
                res.send(error)
            res.send({ message: 'Apartamento criado!' })
        });
    })

    /* 2) Método: Selecionar Todos (acessar em: GET http://locahost:8000/apartamento) */
    .get(function (req, res) {

        //Função para Selecionar Todos os 'apartamentos' e verificar se há algum erro:
        Apartamento.find(function (error, apartamento) {
            if (error)
                res.send(error)
            res.send(apartamento)
        })
    })

// Rotas que irão terminar em '/apartamento/:codigo' - (GET by codigo, PUT, DELETE)
router.route('/apartamento/:codigo')

    /* 3) Método: Selecionar Por Id (acessar em: GET http://localhost:8080/apartamento/:codigo) */
    .get(function (req, res) {

        //Função para Selecionar Por Id e verificar se há algum erro:
        Apartamento.find({ codigo: req.params.codigo }, function (error, apartamento) {
            if (error)
                res.send(error)

            res.send(apartamento)
        })
    })

    /* 4) Método: Atualizar (acessar em: PUT http://localhost:8080/apartamento/:codigo) */
    .put(function (req, res) {

        //Primeiro: Para atualizarmos, precisamos primeiro achar o apartamento. Para isso, vamos selecionar por id:
        Apartamento.find({ codigo: req.params.codigo }, function (error, apartamento) {
            if (error)
                res.send(error)

            //Segundo: Diferente do Selecionar Por Id... a resposta será a atribuição do que encontramos na classe modelo:
            apartamento.num_quartos = req.body.num_quartos
            apartamento.num_suites = req.body.num_suites
            apartamento.num_sala_estar = req.body.num_sala_estar
            apartamento.num_vagas_garagem = req.body.num_vagas_garagem
            apartamento.area = req.body.area
            apartamento.armario_embutido = req.body.armario_embutido
            apartamento.condominio = req.body.condominio
            apartamento.num_sala_jantar = req.body.num_sala_jantar
            apartamento.andar = req.body.andar
            apartamento.portaria_24 = req.body.portaria_24
            apartamento.login_proprietario = req.body.login_proprietario
            apartamento.login_inquilino = req.body.login_inquilino
            apartamento.codigo = req.body.codigo
            //Terceiro: Salvando alteração...
            apartamento.save(function (error) {
                if (error)
                    res.send(error)

                res.send({ message: 'Apartamento Atualizado!' });
            })
        })
    })

    /* 5) Método: Excluir (acessar em: http://localhost:8080/apartamentos/:codigo) */
    .delete(function (req, res) {

        //Função para excluir os dados e também verificar se há algum erro no momento da exclusão:
        Apartamento.remove({ codigo: req.params.codigo }, function (error) {
            if (error)
                res.send(error)

            res.send({ message: 'Apartamento excluído!' })
        })
    })

module.exports = router