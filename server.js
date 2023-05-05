const express = require('express');
const conpost = require('./databases/databasepg.js');
const morgan = require('morgan');
const mogodb = require('mongoose');
const productrouter = require('./routers/products');

const app = express();


// middle ware
app.use(express.json());
app.use(morgan('tiny'));
app.use('/products',productrouter);

// Rotes


app.get('/use',(request , response,next)=>{
  console.log(new Date().toLocaleDateString());
  next();
  response.send({'message':'Hello'});

})

app.post('/',(req,res)=>{
  res.send(req.body)
})

app.use((req,res)=>{
  console.log('hellow world');

})


// Connect To mongo DB
mogodb.connect('mongodb+srv://georgeapanop:pop01212aA@storedb.0enjero.mongodb.net/?retryWrites=true&w=majority').then(()=>{console.log('connected to mongo db!')}).catch((err)=>{err})

app.listen(3001,()=>{
  console.log("server start at port 3001 ")
})
