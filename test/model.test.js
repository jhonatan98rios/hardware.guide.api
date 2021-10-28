const getGadget = require('../controllers/getGadget')
const {hardware} = require('../mockdata/hardware.json')
const samples = require('../mockdata/samples/pt/test.json')

samples.test.map((request, i)=>{

  let client = { text: request.text }
  let label = request.label

  test(`Should return ${label} hardware: ${i} \n \t sample: ${request.text}`, () => {
    return getGadget(client, 'pt').then(data => {
      expect(data).toBe(hardware[label]);
    })
  })
})
