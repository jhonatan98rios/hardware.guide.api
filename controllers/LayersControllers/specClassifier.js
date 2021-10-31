const bayesClassifier = require('../../services/bayesClassifier')

const specClassifier = async function (text){

  try {
    let classification = await bayesClassifier({
      text: text,
      modelFile: 'spec_classifier.json',
      key: 'spec'
    })
    return classification
    
  } catch (error) {
    console.log('error:', error)
    return error
  }
}


module.exports = specClassifier