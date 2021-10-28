const express = require('express');
const router = express.Router();

const learn = require('../mockdata/learn')
const learn_en = require('../mockdata/learn-en')

const DeviceClassifier = require('../controllers/Layers/DeviceClassifier')



router.post('/api/learn', async (req, res) => {
  res.status(200).send(learn)
})


router.post('/api/smart', async (req, res) => {

  if( req.body.text && req.body.text.length > 0 && req.body.text.length < 1024 ){
    try {
      let result = await DeviceClassifier(req.body.text)
      res.status(200).send(result)
      
    } catch (error) {
      console.log(error)
      res.status(400).send(error)
    }
    
	}else{
    let result = { message: 'Houve um problema ao executar a operação. Tente mais tarde'};    
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