const router = require('express').Router();
const fs = require('fs')

router.get('/', (req, res) => {
    if (req.user) {
        
    } else {
        res.status(401).send( {msg: 'Unauthorized'})
    }
});

module.exports = router;