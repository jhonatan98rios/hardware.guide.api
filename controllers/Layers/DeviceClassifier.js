const fs = require('fs');
const natural = require('natural');

const utils = require('../../utilities')


const DeviceClassifier = async function (text){

  /* Lang configuration */
  const raw = require('../../mockdata/samples/pt/layer_1/index.json')

  const clrd_notebooks = utils.clearArray(raw.notebooks)
  const clrd_desktops = utils.clearArray(raw.desktops)
  
  const classified_data = [
    ...utils.elementsClassifier(clrd_notebooks, 'notebook'),
    ...utils.elementsClassifier(clrd_desktops, 'desktop'), 
  ]

  const unordered_data = utils.shuffleArray(classified_data)

  // Train the model and save he in classifier
  let classifier = new natural.BayesClassifier();
  unordered_data.forEach((item) => classifier.addDocument(item.text, item.label))
  classifier.train();
  
  /* Classifie the requested phrase */
  let result = classifier.classify(text);
  return result
}


module.exports = DeviceClassifier