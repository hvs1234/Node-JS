const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public')

app.set('view engine','ejs');

app.get('',(req,res) => {
    res.sendFile(`${publicPath}/index.html`);
});
app.get('/profile',(req,res) => {
    res.render('profile');
});
app.get('*',(req,res) => {
    res.sendFile(`${publicPath}/other.html`)
});

app.listen(4400);