/* from https://mongodb.github.io/node-mongodb-native/3.6/quick-start/quick-start/
const {MongoClient} = require('mongodb');

const main = async() => {
    const uri = "mongodb+srv://Cook:122FooFoo@codedbeats.oh3ba.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    
    try {
        // Connect to the MongoDB cluster
        await client.connect();

        const db = client.db("test")
 
        // Make the appropriate DB calls
        await  client.listDatabases();
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}



main()
*/
