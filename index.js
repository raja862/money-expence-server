const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs')
const app = express()

require('dotenv').config()


//middlewares
app.use(express.json())
app.use(cors())

//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))
app.get("/",(req,res)=>{
    res.send("hello money expence")
})
const server = () => {
    db()
    app.listen(4000, () => {
        console.log("app is running 4000")
    })
}

server()