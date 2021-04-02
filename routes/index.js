const express = require('express');
const router = express.Router();

const learn = require('../mockdata/learn')
const getGadget = require('../controllers/getGadget')


router.get('/', async (req, res) => {
  res.status(200).send(`Hello World`)
})

router.get('/api/learn', async (req, res) => {
  res.status(200).send(learn)
})

router.post('/api/smart', async (req, res) => {

  if( req.body.text && req.body.text.length > 0 && req.body.text.length < 1024 ){
    let result = await getGadget(req.body)
    res.status(200).send(result)
    
	}else{
    let result = { message: 'Houve um problema ao executar a operação. Tente mais tarde'};    
    res.status(500).send(result)
  }
})



module.exports = router;