const bayesClassifier = require('../../services/bayesClassifier')

const DeviceClassifier = async function (text){

  try {
    let classification = await bayesClassifier({
      text: text,
      modelFile: 'device_classifier.json',
      key: 'device'
    })
    return classification
    
  } catch (error) {
    console.log('error:', error)
    return error
  }
}


module.exports = DeviceClassifier


