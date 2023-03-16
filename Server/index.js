const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
app.use(cors())

dotenv.config({path:'./config.env'})
const PORT = process.env.PORT;
require('./db/conn')
app.use(express.json())
app.use(require('./router/router'))

app.listen(PORT,()=>{
    console.log('Server is onpen at localhost'+PORT)
})