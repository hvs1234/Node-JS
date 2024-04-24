const express = require('express');
require('./config');
const products = require('./product')
const app = express();

app.use(express.json());

app.get('/:key', async (req, res) => {
    let data = await products.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}}, 
            ]
        }
    );

    res.send(data);
});

app.listen(4000);