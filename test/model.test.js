const getGadget = require('../controllers/getGadget')
const {hardware} = require('../mockdata/hardware.json')
const {tests} = require('../mockdata/db.json')

tests.map((request, i)=>{

  let client = { text: request.text }
  let label = request.label

  test(`Should return ${label} hardware: ${i}`, () => {
    return getGadget(client).then(data => {
      expect(data).toBe(hardware[label]);
    });
  });

})
