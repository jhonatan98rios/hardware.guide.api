const Product = require('../../models/Product')
const mongoose = require('../../database/connection')


function getProductsByCategory({ device = "desktop", spec = "mid", purpose = "person" }, res) {
  return Product.find({ device, spec, purpose }, function (err, docs){
  
    if (err) console.log("AAAAH MERDA: ", err)

    res.status(200).send(docs)
  })
}

module.exports = {
  getProductsByCategory
}
