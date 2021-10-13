const nlow = require('./nlow.json')
const nmedium = require('./nmedium.json')
const nhigh = require('./nhigh.json')
const xlow = require('./xlow.json')
const low = require('./low.json')
const medium = require('./medium.json')
const high = require('./high.json')
const xhigh = require('./xhigh.json')

module.exports = {
  train: [
    ...nlow.train,
    ...nmedium.train,
    ...nhigh.train,
    ...xlow.train,
    ...low.train,
    ...medium.train,
    ...high.train,
    ...xhigh.train,
  ]
}

