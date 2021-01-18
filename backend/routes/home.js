const router = require("express").Router()
const controller = require("../controller/home.js")

router.get("/", controller.home)

module.exports = router;