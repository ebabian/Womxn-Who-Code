const express = require('express')
const app = express()
const mongoose = require('mongoose')


//use .json()
app.use(express.json());

// public folder is static and public
app.use(express.static('public'))


// http://localhost:3000/wmxn

//controller
const wmxnController = require('./controllers/routes.js')
app.use('/wmxn', wmxnController)

const commentController = require('./controllers/comment-routes.js')
app.use('/comment', commentController)

mongoose.connect('mongodb://localhost:27017/wmxn',
{
  useNewUrlParser: true,
  useUnifiedTopology: true
});


app.get('/', (req, res) => {
  res.send('Working!')
})

app.listen(3000, (req, res) => {
  console.log('listening...');
})
