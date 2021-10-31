const hardware = require('../../mockdata/hardware/hardware_new.json').hardware

const productsController = ({ device="desktop", spec="mid", purpose="person" }) => {

    return hardware[device][spec][purpose]
}

module.exports = productsController
