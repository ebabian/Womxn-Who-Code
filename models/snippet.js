const mongoose = require('mongoose')

const snippetSchema = new mongoose.Schema(
  {
    user: String,
    snippet: String,
    likes: Number,
    date: String
  }
)

const Snippet = mongoose.model('Snippet',
snippetSchema)

module.exports = Snippet
