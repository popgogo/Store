const mongo = require('mongoose');


const merchantschema = mongo.Schema({
  name:{
    type:String,
    required:true
  },
  user:String,
})

exports.Merchant = mongo.model('Merchant',merchantschema);