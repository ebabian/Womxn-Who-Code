const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema(
  {
    username: String,
    img: String,
    entry: String
  }
)

const Blogpost = mongoose.model('Blogpost', blogSchema)
module.exports = Blogpost
