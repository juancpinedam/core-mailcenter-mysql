const mongoose = require("mongoose")
require("dotenv").config()

const dbConnect = ()=>{
  const URL_MONGO = process.env.URL_MONGO;
    mongoose.connect(
        URL_MONGO,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(()=>{console.log("Conexion a base de datos exitosa")})
          .catch(err=> console.error(err))
}

module.exports = {
    dbConnect
}