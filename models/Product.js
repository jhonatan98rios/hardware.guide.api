const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ProductSchema = new Schema({
    name: { type: String, required: false, max: 160 },
    image: { type: String, required: false, max: 200 },
    moba: { type: String, required: false, max: 160 },
    cpu: { type: String, required: false, max: 60 },
    storage: { type: String, required: false, max: 30 },
    ram: { type: String, required: false, max: 30 },
    gpu: { type: String, required: false, max: 60 },
    price: { type: String, required: false, max: 30 },
    url: { type: String, required: false, max: 200 }
})  

module.exports = mongoose.model('Product', ProductSchema, 'KabumScrape');