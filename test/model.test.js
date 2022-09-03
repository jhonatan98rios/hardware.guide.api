const DeviceClassifier = require('../controllers/Layers/DeviceClassifier')
const SpecClassifier = require('../controllers/Layers/SpecClassifier')
const PurposeClassifier = require('../controllers/Layers/PurposeClassifier')

const samples = require('../mockdata/samples/pt/tests/layers.json')

samples.test.map((sample, i)=>{

  let text = sample.text
  let device = sample.device
  let spec = sample.spec
  let purpose = sample.purpose

  test(`Should return ${device} hardware: ${i} \n \t sample: ${text}`, () => {
    return DeviceClassifier(text).then(data => {
      expect(data).toBe(device);
    })
  })

  test(`Should return ${spec} hardware: ${i} \n \t sample: ${text}`, () => {
    return SpecClassifier(text).then(data => {
      expect(data).toBe(spec);
    })
  })

  test(`Should return ${purpose} hardware: ${i} \n \t sample: ${text}`, () => {
    return PurposeClassifier(text).then(data => {
      expect(data).toBe(purpose);
    })
  })
})


