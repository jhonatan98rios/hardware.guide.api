const mongoose = require('mongoose')
const uri = process.env.MONGO_KEY

mongoose.connect(
  uri, {
    promiseLibrary: global.Promise,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
).then(() => {
  console.log("We're connected!")

}).catch((err) => {
  console.log("Erro: " + err)

})

module.exports = mongoose