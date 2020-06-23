const express = require('express')
const router = express.Router()
const Snippet = require('../models/snippet.js')

// Index
router.get('/', (req, res) => {
  Snippet.find({}, (err, foundSnippet) => {
    res.json(foundSnippet)
  })
})

// Create
router.post('/', (req, res) => {
  Snippet.create(req.body, (error, createdSnippet) => {
    res.json(createdSnippet)
  })
})

// Delete
router.delete('/:id', (req, res) => {
  Snippet.findByIdAndRemove(req.body, (error, deleteSnippet) => {
    res.json(deleteSnippet)
  })
})

// Update
router.put('/:id', (req, res) => {
  Snippet.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
    (error, updatedSnippet) => {
    res.json(updatedSnippet)
  })
})

module.exports = router;
