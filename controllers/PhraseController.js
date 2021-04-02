const Phrase = require('../models/Phrase')
const mongoose = require('../database/connection')

class PhraseController {

  /* Create */

  saveData(text, label) {
    return new Promise((resolve, reject) => {
      resolve(Phrase.create(text, label))
    })
  }

  store(text, label){
    this.saveData(text, label).then((result) => {
      console.log(result)

    }).catch((err) => {
      console.log(err)

    }).finally(() => {
      mongoose.disconnect()

    })
  }
}

module.exports = new PhraseController();
