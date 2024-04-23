const express = require('express');
const reqFilter = require('./middleware')
const app = express();

app.get('/',(req,res) => {
    res.send('Welcome to home page');
});
app.get('/users',reqFilter,(req,res) => {
    res.send('Welcome to user page');
});
app.get('/about',(req,res) => {
    res.send('Welcome to about page');
});
app.listen(4500);
