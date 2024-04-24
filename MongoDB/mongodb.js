const {MongoClient} = require("mongodb");
const url = 'mongodb://localhost:27017'

const client = new MongoClient(url);

dbConnect = async () => {
    let result = await client.connect();
    let db = result.db('ecomm');
    return db.collection('products');
}

module.exports = dbConnect;