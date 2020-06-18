const express = require('express')
const app = express()

const port = 5000

const cors = require('cors')
const bodyParser = require('body-parser')

require('./database/index')

app.use(cors())
//Jsons
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const routes = require('./router')
app.use(routes)

app.listen(port, ()=>{
    console.log('Servidor rodando')
})