const express = require('express');
const router = express.Router();

const learn = require('../mockdata/learn/learn')
const learn_en = require('../mockdata/learn/learn-en')

const deviceClassifier = require('../controllers/LayersControllers/deviceClassifier')
const specClassifier = require('../controllers/LayersControllers/specClassifier')
const purposeClassifier = require('../controllers/LayersControllers/purposeClassifier')
const productsController = require('../controllers/productsController/index')


router.post('/api/learn', async (req, res) => {
  res.status(200).send(learn)
})


router.post('/api/smart', async (req, res) => {

  if( req.body.text.length > 0 && req.body.text.length < 1024 ){
    try {
      const promise = Promise.all([deviceClassifier(req.body.text), specClassifier(req.body.text), purposeClassifier(req.body.text)])

      promise.then((response) => {
        const [device, spec, purpose] = response

        const products = productsController({
          device, spec, purpose
        })

        res.status(200).send(products)
      })
      
    } catch (error) {
      console.log(error)
      res.status(400).send(error)
    }
    
	}else{
    let result = { message: 'O texto inserido é inválido'};    
    res.status(500).send(result)
  }
})


/* EN */

/* router.post('/api/learn_en', async (req, res) => {
  res.status(200).send(learn_en)
})

router.post('/api/smart_en', async (req, res) => {

  if( req.body.text && req.body.text.length > 0 && req.body.text.length < 1024 ){
    let result = await getGadget(req.body, 'en')
    res.status(200).send(result)
    
	}else{
    let result = { message: 'Houve um problema ao executar a operação. Tente mais tarde'};    
    res.status(500).send(result)
  }
}) */



module.exports = router;