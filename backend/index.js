// init project
const express = require('express'); // the library we will use to handle requests. import it here
const app = express(); // instantiate express
const { MongoClient } = require('mongodb'); // requisicao ao mongo
const uri = 'mongodb+srv://admin-tp1:tp1-engsoftware@cluster0.af72t.mongodb.net/test?authSource=admin&replicaSet=atlas-9h1mtz-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'

const client = new MongoClient(uri, { useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        const database = client.db('DB-imoveis');
        const collection = database.collection('usuario');
        // Query for a movie that has the title 'Back to the Future'
        const query = { title: 'Back to the Future' };
        const movie = await collection.findOne(query);
        console.log(movie);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

run().catch(console.dir);

app.use(require("cors")()) // allow Cross-domain requests 
app.use(require('body-parser').json()) // When someone sends something to the server, we can recieve it in JSON format

// base route. Responds to GET requests to the root route ('/')
app.get("/", (req, res) => {
    res.send("Home sweet home 🏚") // always responds with the string "TODO"
});

// base route. Responds to POST requests to the root route
app.post("/", (req, res) => {
    res.send("Sending it through the post 📬") // always responds with the string "TODO"
});

// Responds to PUT requests to the root route
app.put("/", (req, res) => {
    res.send("Don't you dare put me up to this.") // always responds with the string "TODO"
});


// listen for requests on port 4567
const port = 4567;
var listener = app.listen(port, () => {
    console.log('Your app is listening on port ' + listener.address().port);
});