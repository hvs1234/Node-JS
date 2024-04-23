module.exports = reqFilter = (req,res,next) => {
    if(!req.query.age) res.send('Provide age');
    else if(req.query.age < 18) res.send('You are under 18');
    else next();
}