const router = require("express").Router()
const middleware = require("../middleware/auth")
const { home } = require("../controllers/home")

router.get("/", home)

module.exports = router;