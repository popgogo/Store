const { Client } = require('pg')


const client = new Client({
  host:"localhost",
  user:"postgres",
  password:"pop012",
  port:"5432",
  database:"postgres",
  schema:"mounirdb"

})

client.connect()

client.query(`select * from mounirdb.employee `,(err,res)=>{
  if(!err){
    console.log(res.rows);
  }else{
    console.log(err.message);
  }
  client.end;
})