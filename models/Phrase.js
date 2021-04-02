const mongoose = require('mongoose')
const Schema = mongoose.Schema

let PhraseSchema = new Schema({
    text: {type: String, required: true, max: 2048},
    label: {type: String, required: true, max: 8}
})  

module.exports = mongoose.model('Phrase', PhraseSchema);