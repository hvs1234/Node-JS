const {MongoClient} = require("mongodb");
const url = 'mongodb://localhost:27017'

const client = new MongoClient(url);

getdata = async () => {
    let result = await client.connect();
    let db = result.db('ecomm');
    let collection = db.collection('products');
    console.log(await collection.find({}).toArray());
}

getdata();
