const hardware = require('../../mockdata/hardware/index.json')

const productsController = ({ device="desktop", spec="mid", purpose="person" }) => {

    return hardware[device][spec][purpose]
}

module.exports = productsController
