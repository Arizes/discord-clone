const router = require('express').Router();
const fs = require('fs')

router.get('/:name', (req, res) => {
    if (req.params) {
        let timeTable = require(`./html/${req.params.name}.json`)
        if (timeTable) {
            res.send(timeTable)
        } else {
            res.status(404).send({ message: "Not Found" })
        }
    } else {
        res.status(401).send( {msg: 'Unauthorized'})
    }
});
router.get("/", (req, res) => {
    res.writeHead(200, { "Content-type": "text/plain"})
    res.write("Not found\n\n(remember to include a valid route e.g /api/timetable/YourName)")
})

module.exports = router;