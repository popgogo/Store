const mongo = require('mongoose');
const {Category,Supcategory} = require('./category')
const {Merchant} = require('./merchants')



const productschema = mongo.Schema({
  name:String,
  despref:String,
  richtext:String,
  image:String,
  images:[String],
  price:Number,
  category:{
    type:mongo.Schema.Types.ObjectId,
    ref:'Supcategory'
  },
  merchant:{
    type:mongo.Schema.Types.ObjectId,
    ref:'Merchant'
  },
  dateadd:{
    type:Date,
    default:Date.now
  },
  datemodify:Date


});

exports.Product = mongo.model('Product',productschema);


