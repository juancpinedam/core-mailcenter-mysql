
const {createPool} = require("mysql2")
require("dotenv").config()



const pool = createPool({
    host:process.env.DBHOST,
    user:process.env.DBUSER,
    password:process.env.DBPASSWORD,
    port:3306,
    database:process.env.DATABASE
})

module.exports = {
    pool
}
