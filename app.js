
const express = require('express')
const logger = require('./logger.js')

const app = express()


app.get('/',logger,(req,res)=> {
   res.send('Home Page')
})

app.get('/about/',logger,(req,res) => {
    res.send('About Page')
})

app.listen(5000,() => {
    console.log('Server listening on port 5000');
})