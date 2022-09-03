const bayesClassifier = require('../../services/bayesClassifier')

const purposeClassifier = async function (text){

  try {
    let classification = await bayesClassifier({
      text: text,
      modelFile: 'purpose_classifier.json',
      key: 'purpose'
    })
    return classification
    
  } catch (error) {
    console.log('error:', error)
    return error
  }
}

module.exports = purposeClassifier