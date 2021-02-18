const express = require('express')
const Agenda = require('../db/agenda')
const app = express() // instantiate express
const router = express.Router()

app.use('/', router)

router.use(function (req, res, next) {
    next()
})

router.route(`/agenda`)
    // Método: Adicionar DOC na collection (acessar em: POST http://localhost:8000/agenda
    .post(function (req, res) {
        const agenda = new Agenda({
            data: req.body.data,
            codigo_imovel: req.body.codigo_imovel,
            login_usuario: req.body.login_usuario
        })

        agenda.save(function (error) {
            if (error)
                res.send(error)
            res.send({ message: 'Visita Agendada!' })
        })
    })

    // Método: Selecionar Todos (acessar em: GET http://locahost:8000/agenda)
    .get(function (req, res) {
        // Função para Selecionar Todos os agendamentos e verificar se há algum erro:
        Agenda.find(function (error, agenda) {
            if (error)
                res.send(error)
            res.send(agenda)
        })
    })

router.route(`/verAgendamentos`) // Acessar agendamentos marcados em uma determinada data
    .post(function (req, res) {
        Agenda.find({ data: req.body.data }, function (error, agenda) {
            if (error)
                res.send(error)
            res.send(agenda)
        })
    })

module.exports = router