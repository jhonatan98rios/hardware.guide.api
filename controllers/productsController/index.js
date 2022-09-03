const Product = require('../../models/Product')
const mongoose = require('../../database/connection')


// function getProductsByCategory({ device = "desktop", spec = "mid" }, res) {
//   return Product.find({ device, spec }, function (err, docs){
  
//     if (err) console.log("AAAAH MERDA: ", err)

//     console.log(docs)

//     res.status(200).send(docs)
//   })
// }


async function getProductsByCategory({ device = "desktop", spec = "mid" }, res) {
  const result = await Product.find({ device, spec }).exec()

  res.status(200).send(result)
}

module.exports = {
  getProductsByCategory
}
