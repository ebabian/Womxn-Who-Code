const express = require('express')
const app = express()
// const mongoose = require('mongoose')


// http://localhost:3000/wmxn


app.get('/', (req, res) => {
  res.send('Working!')
})

app.listen(3000, (req, res) => {
  console.log('listening...');
})
