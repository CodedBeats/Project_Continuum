/* Coded By Lachlan

const MongoClient = require('mongodb').MongoClient;

const connect = (url, dbName) => {
    return new Promise((resolve, reject) => {
        try {
            const client = new MongoClient(url);
            client.connect(err => {
                if (err !== null) throw err;
                resolve(client.db(dbName));
            })
        } catch (error) {
            reject(error);
        }
    });
}

let db = null;

const setupConnection = async () => {
    const url = "mongodb+srv://Cook:122FooFoo@codedbeats.oh3ba.mongodb.net/Project_Continuum?retryWrites=true&w=majority";
    const dbName = "myproject";
    try {
        db = await connect(url, dbName);
        console.log("Database successfully connected");
    } catch (error) {
        console.error("Failed to connect to database:", error);
    }
}

const waitForConnection = async () => {
    const wait = ms => new Promise(r => setTimeout(r, ms));
    if (db !== null) return;
    while (db === null) {
        await wait(1000);
    }
    return;
}

const doTestWrite = async () => {
    await waitForConnection();
    const collection = db.collection('documents');
    // Insert some documents
    collection.insertMany([
        { a: 1 }, { a: 2 }, { a: 3 }
    ], function (err, result) {
        console.log("Inserted 3 documents into the collection");
    });
}

const doTestRead = async () => {
    await waitForConnection();
    const collection = db.collection('documents');
    collection.find({}).toArray(function (err, docs) {
        console.log("Found the following records", docs);
    });
}

const doTest = async () => {
    await waitForConnection();
    await doTestWrite();
    await doTestRead();
}

setupConnection();
doTest();

*/