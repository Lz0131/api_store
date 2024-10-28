const express = require('express')
const mongoose = require('mongoose');
var cors = require('cors') 
const employeeRoutes = require('./routes/product_router')
require('dotenv').config()

const api_prefix = process.env.API_PREFIX

const app = express()
app.use(cors()) 
app.use(express.json())

const port = process.env.APP_PORT

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.CONN_STRING);
    console.log("Connection ok..")
    app.use(`${api_prefix}`, employeeRoutes)
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}!`)
    })
}

