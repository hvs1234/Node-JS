const express = require('express');
require('./config');
const products = require('./product')
const app = express();

app.use(express.json());

app.post('/', async (req,res) => {
    let data = new products(req.body);
    let result = await data.save();
    res.send(result);
});

app.get('/', async (req,res) => {
    let result = await products.find();
    res.send(result);
});

app.listen(4500);