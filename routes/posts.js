const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

//Listeners
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save();
        res.status(200);
    } catch (err) {
        res.status(420).json({message: err});
    }
});

router.get('/', (req, res) => {
    res.send('POSTs')
})


module.exports = router;