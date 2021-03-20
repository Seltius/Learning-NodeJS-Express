const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

//Listeners
//ADD MONGODB OBJECT
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        await post.save();
        res.sendStatus(200);
    } catch (err) {
        res.sendStatus(420).json({errorMessage: err});
    }
});

//GET ALL MONGODEB SAVED OBJECTs
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(420).json({errorMessage: err});
    }
})

//GET A SPECIFIC MONGODB COLLECTION OBJ BY ID
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(420).json({errorMessage: err});
    }
})

//DELETE A SPECIFIC MONGODB COLLECTION OBJ BY ID
router.delete('/:id', async (req, res) => {
    try {
        await Post.deleteOne({_id: req.params.id});
        res.sendStatus(200);
    } catch (err) {
        res.status(420).json({errorMessage: err})
    }
});

//UPDATE A SPECIFIC MONGODB COLLECTION OBJ BY ID
router.patch('/:id', async (req, res) => {
    try {
        await Post.updateOne({_id: req.params.id}, {$set: req.body});
        res.sendStatus(200);
    } catch (err) {
        res.status(420).json({errorMessage: err});
    }
})

module.exports = router;