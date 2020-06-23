const express = require('express');
const router = express.Router();
const Blogpost = require('../models/blogPost.js');

//Index
router.get('/', (req, res) => {
    Blogpost.find({}, (err, foundBlogpost) => {
        res.json(foundBlogpost);
    })
});

//Create
router.post('/', (req, res) => {
    Blogpost.create(req.body, (error, createdBlogpost) => {
        res.json(createdBlogpost);
    });
});

//Delete
router.delete('/:id', (req, res) => {
    Blogpost.findByIdAndRemove(req.params.id, (error, deletedBlogpost) => {
        res.json(deletedBlogpost);
    });
});

//Update
router.put('/:id', (req, res) => {
    Blogpost.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedBlogpost) => {
        res.json(updatedBlogpost);
    })
});

module.exports = router;
