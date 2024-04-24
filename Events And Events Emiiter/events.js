const express = require('express');
const EventEmitter = require('events');
const app = express();

let count = 0;
const event = new EventEmitter();

event.on('countAPI',() => {
    count++;
    console.log(`event called at ${count}`);
})

app.get('/',(req,res) => {
    res.send("Hello World!");
    event.emit('countAPI',count);
});

app.get('/about',(req,res) => {
    res.send('about page');
});

app.listen(4200);