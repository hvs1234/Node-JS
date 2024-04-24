const express = require('express');
const dbConnect = require('./mongodb');
const mongodb = require('mongodb');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    let data = await dbConnect();
    let result = await data.find({}).toArray();
    res.send(result);
});

app.post('/', async (req,res) => {
    let data = await dbConnect();
    let result = await data.insertMany(req.body);
    res.send(result);
});

app.put("/:name", async (req,res) => {
    let data = await dbConnect();
    let result = await data.updateOne(
        {name:req.params.name},
        {$set:req.body}
    );
    res.send(result);
});

app.delete("/:id", async (req,res) => {
    let data = await dbConnect();
    let result = await data.deleteOne(
        {
            _id: new mongodb.ObjectId(req.params.id),
        }
    )
    res.send(result);
});

app.listen(4000);