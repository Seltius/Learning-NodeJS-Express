const express = require('express');
const router = express.Router();

//Specify listeners
router.get('/', (req, res) => {
    res.send('USERs')
})

router.get('/specific', (req, res) => {
    res.send('USERs SPECIFIC')
})

module.exports = router;