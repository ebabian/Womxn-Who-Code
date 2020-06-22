const express = require('express')
const app = express()
const mongoose = require('mongoose')


//use .json()
app.use(express.json());

// public folder is static and public
app.use(express.static('public'))

const db = mongoose.connection
require('dotenv').config()
const PORT = process.env.PORT || 8888
const MONGODB_URI = process.env.MONGODB_URI

// http://localhost:3000/wmxn

//controller
const wmxnController = require('./controllers/routes.js')
app.use('/wmxn', wmxnController)

const commentController = require('./controllers/comment-routes.js')
app.use('/comment', commentController)

mongoose.connect(
    MONGODB_URI,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
        useCreateIndex: true,
    },
    () => {
        console.log('connected to mongoose');
    }
);

db.on('error', err => console.log(err.message + ' is mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI))
db.on('disconnected', () => console.log('mongo disconnected'))


app.get('/', (req, res) => {
  res.send('Working!')
})

console.log(PORT);

app.listen(PORT, (req, res) => {
  console.log('listening...');
})
