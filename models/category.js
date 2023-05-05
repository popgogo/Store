const mongo = require('mongoose');


const categoryschema = mongo.Schema({
  name:String,
  supcategory:[
    {
      type:mongo.Schema.Types.ObjectId,
      ref:'Supcategory'
    }
  ]
});

const supcategoryschema = mongo.Schema({
  catname:String,
  category:{
    type:mongo.Schema.Types.ObjectId,
    ref:'Category'
  }
});

const Category = mongo.model('Category',categoryschema);
const Supcategory = mongo.model('Supcategory',supcategoryschema);

module.exports = {
  Category,Supcategory
}