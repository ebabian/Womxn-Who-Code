const express = require('express')
const app = express()
// const mongoose = require('mongoose')


app.get('/', (req, res) => {
  res.send('Working!')
})

app.listen(3000, (req, res) => {
  console.log('listening...');
})
