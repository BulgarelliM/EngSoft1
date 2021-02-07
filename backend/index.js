// init project
const express = require('express'); // the library we will use to handle requests. import it here
const app = express(); // instantiate express
const bancoDeDados = require('./db/bancoDeDados')
const data = require('./dataTest.json')
const table = 'endereco'
const dbName = 'DB-imoveis'

app.use(require("cors")()) // allow Cross-domain requests 
app.use(require('body-parser').json()) // When someone sends something to the server, we can recieve it in JSON format

// base route. Responds to GET requests to the root route ('/')
app.get(`/${table}`, (req, res) => {
    res.send(bancoDeDados.run()) // always responds with the string "TODO"
});

// base route. Responds to POST requests to the root route
app.post(`/${table}`, (req, res) => {
    const insert = bancoDeDados.insert(dbName, table, data) // always responds with the string "TODO"
    res.send(insert)
});

// Responds to PUT requests to the root route
app.put(`/${table}`, (req, res) => {
    res.send("Don't you dare put me up to this.") // always responds with the string "TODO"
});

app.delete(`/${table}`, (req, res) => {
    res.send("Delete something.") // always responds with the string "TODO"
});


// listen for requests on port 4567
const port = 4567;
var listener = app.listen(port, () => {
    console.log('Your app is listening on port ' + listener.address().port);
});