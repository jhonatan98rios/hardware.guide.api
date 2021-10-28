const fs = require('fs');
const natural = require('natural');
const PhraseController = require('./PhraseController')


const getGadget = async function (request, lang){

  /* Lang configuration */
  const db = lang == 'pt' ? require('../mockdata/samples/pt') : require('../mockdata/samples/en')
  const {hardware} = lang == 'pt' ? require('../mockdata/hardware.json') : require('../mockdata/hardware-en.json')
  let saveFile = lang == 'pt' ? './mockdata/models/classifier.json' : './mockdata/models/classifier-en.json'
  
  let classifier;

  try {
    // Read the classifier file with model saved  
    let raw = fs.readFileSync(saveFile); 
    classifier = natural.BayesClassifier.restore(JSON.parse(raw));

  } catch {
    // Train the model and save he in classifier
    classifier = new natural.BayesClassifier();
    db.train.forEach((item) => classifier.addDocument(item.text, item.label))
    classifier.train();

    // Write the content
    let raw = JSON.stringify(classifier);

    /* fs.writeFile(saveFile, raw, function (err) {
      if (err) return console.log(err);
      console.log('WriteFile')
    }) */

  } finally {

    let text = request.text
    
    /* Classifie the requested phrase */
    const label = classifier.classify(text);

    let specs = {
      'xlow': hardware.xlow,
      'low': hardware.low,
      'medium': hardware.medium,
      'high': hardware.high,
      'xhigh': hardware.xhigh,
      /* 'premium': hardware.premium,
      'mac': hardware.mac, */
      'nlow': hardware.nlow,
      'nmedium': hardware.nmedium,
      'nhigh': hardware.nhigh,
      'default': {"message":"Sua busca falhou, tente mais tarde"}
    };

    //PhraseController.store({text, label})
      
    return specs[label] || specs["default"]
  }
}


module.exports = getGadget