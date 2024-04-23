const express = require('express');
const app = express();

app.get('',(req,res) => {
    res.send('Welcome to my website');
});

app.get('/about',(req,res) => {
    res.send('This is about page');
});

app.listen(4200);