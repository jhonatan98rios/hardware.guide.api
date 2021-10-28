const DeviceClassifier = require('../controllers/Layers/DeviceClassifier')
const samples = require('../mockdata/samples/pt/layer_1/test.json')

samples.test.map((request, i)=>{

  let text = request.text
  let label = request.label

  test(`Should return ${label} hardware: ${i} \n \t sample: ${text}`, () => {
    return DeviceClassifier(text).then(data => {
      expect(data).toBe(label);
    })
  })
})


