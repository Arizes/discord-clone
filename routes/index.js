const router = require("express").Router();
const auth = require('./auth')
const timetable = require('./timetable') 
const profile = require('./profile');

router.use("/profile", auth)
router.use('/auth', auth );
router.use('/timetable', timetable);

module.exports = router;