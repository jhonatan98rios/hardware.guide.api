const fs = require('fs');
const natural = require('natural');

const [ elementsClassifier, shuffleArray, clearArray ] = require('../../utilities')


const DeviceClassifier = async function (request, lang){

  /* Lang configuration */
  const [notebooks, desktops] = require('../../mockdata/samples/pt/layer_1/index.json')

  const clrd_notebooks = clearArray(notebooks)
  const clrd_desktops = clearArray(desktops)
  
  const classified_data = [
    ...elementsClassifier(clrd_notebooks),
    ...elementsClassifier(clrd_desktops), 
  ]

  const shuffled_data = shuffleArray(classified_data)
  

  // Train the model and save he in classifier
  let classifier = new natural.BayesClassifier();
  shuffled_data.train.forEach((item) => classifier.addDocument(item.text, item.label))
  classifier.train();

  let text = request.text
  
  /* Classifie the requested phrase */
  return classifier.classify(text);
}


module.exports = DeviceClassifier