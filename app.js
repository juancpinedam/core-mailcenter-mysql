const express = require("express")
const cors = require("cors")
const app = express()
require("dotenv").config()

app.use(express.json({limit: '50mb'}));
//app.use(express.urlencoded({limit: '50mb'}));
app.use("/images", express.static("images"));



////RUTAS/////////////NUEVP

var empresasRoutes = require('./Routes/EmpresasRoutes')
var authRoutes = require('./routes/authRoutes')
var estadosRoutes = require('./routes/EstadosRoutes')


app.use(cors())
const { dbConnect } = require("./config/mongo")

const port = process.env.PORT || 3001;


app.listen(port,()=>{
    console.log("servidor corriendo en localhost:"+port)
})

dbConnect()

app.get('/estados',(req,res)=>{
    res.send('pong')
})
app.use('/api/empresas',empresasRoutes)
app.use('/api/users',authRoutes)
app.use('/api/estados',estadosRoutes)


//dbConnectMySql()