const { MongoClient } = require('mongodb'); // requisicao ao mongo
const uri = 'mongodb+srv://admin-tp1:tp1-engsoftware@cluster0.af72t.mongodb.net/test?authSource=admin&replicaSet=atlas-9h1mtz-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'

const client = new MongoClient(uri, { useUnifiedTopology: true });

async function run(db, table,query) {
    try {
        await client.connect();
        const database = client.db(db);
        const collection = database.collection(table);
        const movie = await collection.findOne(query);
        console.log(movie);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

async function insert(db, table, data) {
    try {
        await client.connect();
        const database = client.db(db);
        const collection = database.collection(table);
        const movie = await collection.insertOne(data);
        console.log(movie);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

// run('DB-imoveis','endereco', { cidade: 'Obidos' }).catch(console.dir);

module.exports.run = run;
module.exports.insert = insert;