const passport = require('passport');

const router = require('express').Router();

router.get('/profile', (req, res) => {
    passport.authenticate("bearer", { session: false }), (req, res) => { res.json(req.user) }
});

module.exports = router;