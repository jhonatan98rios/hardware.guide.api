const fs = require('fs');
const natural = require('natural');
const utils = require('../utilities')
const raw = require('../mockdata/samples/pt/Layers/layers.json').samples


const bayesClassifier = async function ({ text = '', modelFile = '', key = '' }) {

  let classifier;

  try {
    // Read the classifier file with model saved  
    let model = fs.readFileSync(`./mockdata/models/${modelFile}`);
    classifier = natural.BayesClassifier.restore(JSON.parse(model));

  } catch {
    const samples = utils.preProcess({ array: raw })

    // Train the model and save he in classifier
    classifier = new natural.BayesClassifier();
    samples.forEach((item) => classifier.addDocument(item.text, item[key]))
    classifier.train();

    // Write the content
    let json = JSON.stringify(classifier);

    fs.writeFile(`./mockdata/models/${modelFile}`, json, function (err) {
      if (err) return console.log(err);
      console.log('WriteFile')
    })

  } finally {
    /* Classifie the requested phrase */
    let result = classifier.classify(text)
    return result
  }
}


module.exports = bayesClassifier