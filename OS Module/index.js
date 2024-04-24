const os = require('os');
const express = require( 'express' );
const app = express();
// console.log(os);
console.log(os.arch);
console.log(os.totalmem()/(1024*1024*1024));
console.log(os.userInfo());

app.get('/',(_,res) => {
    res.send(JSON.stringify(os));
});

app.listen(4300);
