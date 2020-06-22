const express = require('express')
const router = express.Router()
const Comment = require('../models/comment.js')

// Index
router.get('/', (req, res) => {
  Comment.find({}, (err, foundComment) => {
    res.json(foundComment)
  })
})

// Create
router.post('/', (req, res) => {
  Comment.create(req.body, (error, createdComment) => {
    res.json(createdComment)
  })
})

// Delete
router.delete('/:id', (req, res) => {
  Comment.findByIdAndRemove(req.body, (error, deleteComment) => {
    res.json(deleteComment)
  })
})

// Update
router.put('/:id', (req, res) => {
  Comment.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
    (error, updatedComment) => {
    res.json(updatedComment)
  })
})

module.exports = router;
