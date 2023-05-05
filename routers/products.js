const express = require('express');
const router = express.Router();
const {Product} = require('../models/product');


router.get('/',async(req,res)=>{
  const Products = await Product.find();
  if(!Product){
    res.status(500).json({'st':'faild'});
  }
  res.status(200).json({'st':'success','productlist':Products});
})

router.post('/',(req,res)=>{
  const {name ,desc ,richtext , imageurl,price } = req.body;
  const addProduct = new Product({
    name:name,
    despref:desc,
    richtext:richtext,
    image:imageurl,
    images:images,
    price:price,
    category:category,
    merchant:merchant,

  });
  addProduct.save().then(product => {
    res.status(200).json({'added':product})
  }).catch(err => {
    res.status(500).json({'st':'faild'})
  })
  
})

module.exports = router;