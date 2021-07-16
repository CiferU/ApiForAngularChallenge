const express = require('express');
const bodyParser = require('body-parser');


const cors = require('cors');



const app = express();
const port = 4000;

app.use(bodyParser.json({limit:'100mb'}));
app.use(cors());

app.all('*', function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','PUT,GET,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
})



app.get('/api/hello', function(req,res){

    res.send({"message":"hello there"});
})


app.listen(port, function(){
    console.log(`Restful api listening to port ${port}`);
})