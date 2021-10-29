const fs = require('fs');
const natural = require('natural');

const utils = require('../../utilities')

const PurposeClassifier = async function (text){
 
  const raw = require('../../mockdata/samples/pt/Layers/layers.json')

  const samples = utils.clearArray(raw.samples)
  const shuffled_samples = utils.shuffleArray(samples)

  // Train the model and save he in classifier
  let classifier = new natural.BayesClassifier();
  shuffled_samples.forEach((item) => classifier.addDocument(item.text, item.purpose))
  classifier.train();
  
  /* Classifie the requested phrase */
  let result = classifier.classify(text);
  return result
}


module.exports = PurposeClassifier