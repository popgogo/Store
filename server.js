const express = require('express')
const app = express()

// Rotes
app.get('/',(request , response)=>{
  response.send({'message':'Hello'})
})



app.listen(3001,()=>{
  console.log("gggg")
})